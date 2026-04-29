from pydantic_settings import BaseSettings
from typing import Optional

class Settings(BaseSettings):
    # 应用配置
    APP_NAME: str = "国学AI助手"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True
    
    # OpenAI配置
    OPENAI_API_KEY: str
    OPENAI_BASE_URL: str = "https://api.openai.com/v1"
    MODEL_NAME: str = "gpt-4"
    
    # 服务器配置
    HOST: str = "0.0.0.0"
    PORT: int = 8000
    
    # 数据库配置
    DATABASE_URL: str = "sqlite:///./guoxue.db"
    
    # 向量数据库
    CHROMA_PERSIST_DIRECTORY: str = "./chroma_db"
    
    class Config:
        env_file = ".env"
        case_sensitive = True

settings = Settings()
