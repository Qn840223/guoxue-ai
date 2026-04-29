from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field
from typing import Optional, List
from app.services.ai_service import ChatService
import uuid

router = APIRouter()
chat_service = ChatService()

class Message(BaseModel):
    """消息模型"""
    role: str = Field(..., description="角色：user/assistant")
    content: str = Field(..., description="消息内容")

class ChatRequest(BaseModel):
    """聊天请求"""
    message: str = Field(..., description="用户消息")
    conversation_id: Optional[str] = Field(None, description="会话ID")
    history: Optional[List[Message]] = Field([], description="历史消息")

class ChatResponse(BaseModel):
    """聊天响应"""
    message: str = Field(..., description="AI回复")
    conversation_id: str = Field(..., description="会话ID")

@router.post("/", response_model=ChatResponse)
async def chat(request: ChatRequest):
    """
    智能问答接口
    
    - **message**: 用户消息
    - **conversation_id**: 会话ID（可选）
    - **history**: 历史消息（可选）
    """
    try:
        # 生成或使用现有会话ID
        conversation_id = request.conversation_id or str(uuid.uuid4())
        
        # 构建消息历史
        history = [{"role": msg.role, "content": msg.content} 
                   for msg in request.history] if request.history else []
        
        # 获取AI回复
        response = chat_service.chat(
            message=request.message,
            history=history
        )
        
        return ChatResponse(
            message=response,
            conversation_id=conversation_id
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.get("/suggestions")
async def get_suggestions():
    """获取问题建议"""
    return {
        "suggestions": [
            "《论语》中有哪些关于学习的名言？",
            "请解释一下'仁义礼智信'的含义",
            "唐诗和宋词有什么区别？",
            "孔子的教育思想是什么？",
            "什么是'四书五经'？",
            "请介绍一下中国古代的科举制度"
        ]
    }
