from fastapi import APIRouter, HTTPException
from app.services.knowledge_base import KnowledgeBase

router = APIRouter()
kb = KnowledgeBase()

@router.get("/random-excerpt")
async def get_random_excerpt():
    """获取随机经典摘录"""
    excerpt = kb.get_random_excerpt()
    if excerpt:
        return excerpt
    raise HTTPException(status_code=404, detail="未找到经典摘录")

@router.get("/dynasties")
async def get_dynasties():
    """获取所有朝代列表"""
    return {"dynasties": kb.get_all_dynasties()}

@router.get("/allusion/{keyword}")
async def get_allusion(keyword: str):
    """根据关键词获取典故"""
    result = kb.search_allusion(keyword)
    if result:
        return result
    raise HTTPException(status_code=404, detail=f"未找到典故：{keyword}")

@router.get("/person/{name}")
async def get_person(name: str):
    """根据姓名获取历史人物信息"""
    result = kb.search_person(name)
    if result:
        return result
    raise HTTPException(status_code=404, detail=f"未找到人物：{name}")

@router.get("/classic/{title}")
async def get_classic(title: str):
    """根据标题获取经典文献"""
    result = kb.search_classic(title)
    if result:
        return result
    raise HTTPException(status_code=404, detail=f"未找到文献：{title}")
