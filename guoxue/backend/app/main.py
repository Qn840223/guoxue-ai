from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.api import translation, poetry, query, punctuation, couplet, knowledge, chat

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION,
    description="国学AI助手API"
)

# CORS配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 注册路由
app.include_router(translation.router, prefix="/api/translation", tags=["古文翻译"])
app.include_router(poetry.router, prefix="/api/poetry", tags=["诗词创作"])
app.include_router(query.router, prefix="/api/query", tags=["典故查询"])
app.include_router(punctuation.router, prefix="/api/punctuation", tags=["智能断句"])
app.include_router(couplet.router, prefix="/api/couplet", tags=["对联生成"])
app.include_router(knowledge.router, prefix="/api/knowledge", tags=["知识库"])
app.include_router(chat.router, prefix="/api/chat", tags=["智能问答"])

@app.get("/")
async def root():
    return {
        "message": "欢迎使用国学AI助手",
        "version": settings.APP_VERSION,
        "docs": "/docs"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
