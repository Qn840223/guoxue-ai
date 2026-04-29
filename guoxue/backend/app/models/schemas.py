from pydantic import BaseModel, Field
from typing import Optional, List

class TranslationRequest(BaseModel):
    """古文翻译请求"""
    text: str = Field(..., description="待翻译的古文")
    add_annotation: bool = Field(False, description="是否添加注释")

class TranslationResponse(BaseModel):
    """古文翻译响应"""
    original: str = Field(..., description="原文")
    translation: str = Field(..., description="译文")
    annotation: Optional[str] = Field(None, description="注释")

class PoetryRequest(BaseModel):
    """诗词创作请求"""
    theme: str = Field(..., description="主题")
    style: str = Field("七言绝句", description="诗词格式：五言绝句、七言绝句、五言律诗、七言律诗")
    mood: Optional[str] = Field(None, description="情感基调")

class PoetryResponse(BaseModel):
    """诗词创作响应"""
    title: str = Field(..., description="标题")
    content: str = Field(..., description="诗词内容")
    style: str = Field(..., description="格式")
    explanation: Optional[str] = Field(None, description="解释")

class QueryRequest(BaseModel):
    """典故查询请求"""
    keyword: str = Field(..., description="查询关键词")
    query_type: str = Field("allusion", description="查询类型：allusion(典故)、person(人物)、event(事件)")

class QueryResponse(BaseModel):
    """典故查询响应"""
    keyword: str = Field(..., description="关键词")
    results: List[dict] = Field(..., description="查询结果")

class PunctuationRequest(BaseModel):
    """断句请求"""
    text: str = Field(..., description="无标点古文")

class PunctuationResponse(BaseModel):
    """断句响应"""
    original: str = Field(..., description="原文")
    punctuated: str = Field(..., description="添加标点后的文本")

class ChatRequest(BaseModel):
    """聊天请求"""
    message: str = Field(..., description="用户消息")
    conversation_id: Optional[str] = Field(None, description="会话ID")

class ChatResponse(BaseModel):
    """聊天响应"""
    message: str = Field(..., description="AI回复")
    conversation_id: str = Field(..., description="会话ID")
