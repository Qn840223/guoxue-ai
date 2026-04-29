from fastapi import APIRouter, HTTPException
from app.models.schemas import PunctuationRequest, PunctuationResponse
from app.services.ai_service import PunctuationService

router = APIRouter()
punctuation_service = PunctuationService()

@router.post("/", response_model=PunctuationResponse)
async def add_punctuation(request: PunctuationRequest):
    """
    智能断句接口
    
    - **text**: 无标点的古文
    """
    try:
        result = punctuation_service.add_punctuation(text=request.text)
        return PunctuationResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/example")
async def get_example():
    """获取断句示例"""
    return {
        "example": {
            "original": "子曰学而时习之不亦说乎有朋自远方来不亦乐乎",
            "punctuated": "子曰：学而时习之，不亦说乎？有朋自远方来，不亦乐乎？"
        }
    }
