from fastapi import APIRouter, HTTPException
from app.models.schemas import PoetryRequest, PoetryResponse
from app.services.ai_service import PoetryService

router = APIRouter()
poetry_service = PoetryService()

@router.post("/", response_model=PoetryResponse)
async def create_poetry(request: PoetryRequest):
    """
    诗词创作接口
    
    - **theme**: 主题
    - **style**: 诗词格式（五言绝句、七言绝句、五言律诗、七言律诗）
    - **mood**: 情感基调（可选）
    """
    try:
        result = poetry_service.create_poetry(
            theme=request.theme,
            style=request.style,
            mood=request.mood
        )
        return PoetryResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/styles")
async def get_poetry_styles():
    """获取支持的诗词格式"""
    return {
        "styles": [
            {"name": "五言绝句", "description": "四句，每句五字"},
            {"name": "七言绝句", "description": "四句，每句七字"},
            {"name": "五言律诗", "description": "八句，每句五字"},
            {"name": "七言律诗", "description": "八句，每句七字"}
        ]
    }
