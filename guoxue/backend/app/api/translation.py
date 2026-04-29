from fastapi import APIRouter, HTTPException
from app.models.schemas import TranslationRequest, TranslationResponse
from app.services.ai_service import TranslationService

router = APIRouter()
translation_service = TranslationService()

@router.post("/", response_model=TranslationResponse)
async def translate_text(request: TranslationRequest):
    """
    古文翻译接口
    
    - **text**: 待翻译的古文
    - **add_annotation**: 是否添加注释
    """
    try:
        result = translation_service.translate(
            text=request.text,
            add_annotation=request.add_annotation
        )
        return TranslationResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/example")
async def get_example():
    """获取翻译示例"""
    return {
        "examples": [
            {
                "original": "学而时习之，不亦说乎",
                "translation": "学习知识并且按时温习，不也是很愉快的事吗？"
            },
            {
                "original": "有朋自远方来，不亦乐乎",
                "translation": "有朋友从远方来，不也是很快乐的事吗？"
            }
        ]
    }
