from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from app.services.ai_service import CoupletService

router = APIRouter()
couplet_service = CoupletService()

class CoupletRequest(BaseModel):
    """对联请求"""
    first_line: str = Field(..., description="上联")

class CoupletResponse(BaseModel):
    """对联响应"""
    first_line: str = Field(..., description="上联")
    second_line: str = Field(..., description="下联")
    horizontal_scroll: str = Field(None, description="横批")

@router.post("/", response_model=CoupletResponse)
async def create_couplet(request: CoupletRequest):
    """
    对联生成接口
    
    - **first_line**: 上联
    """
    try:
        result = couplet_service.create_couplet(first_line=request.first_line)
        return CoupletResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/example")
async def get_example():
    """获取对联示例"""
    return {
        "examples": [
            {
                "first_line": "春回大地千山秀",
                "second_line": "日照神州万木荣",
                "horizontal_scroll": "春满人间"
            },
            {
                "first_line": "风声雨声读书声声声入耳",
                "second_line": "家事国事天下事事事关心",
                "horizontal_scroll": "家国天下"
            }
        ]
    }
