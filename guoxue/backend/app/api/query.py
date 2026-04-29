from fastapi import APIRouter, HTTPException
from app.models.schemas import QueryRequest, QueryResponse
from app.services.ai_service import QueryService

router = APIRouter()
query_service = QueryService()

@router.post("/", response_model=QueryResponse)
async def query_allusion(request: QueryRequest):
    """
    典故查询接口
    
    - **keyword**: 查询关键词
    - **query_type**: 查询类型（allusion/person/event）
    """
    try:
        result = query_service.query_allusion(
            keyword=request.keyword,
            query_type=request.query_type
        )
        return QueryResponse(**result)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/types")
async def get_query_types():
    """获取支持的查询类型"""
    return {
        "types": [
            {"value": "allusion", "label": "典故"},
            {"value": "person", "label": "历史人物"},
            {"value": "event", "label": "历史事件"}
        ]
    }
