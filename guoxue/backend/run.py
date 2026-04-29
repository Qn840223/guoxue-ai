#!/usr/bin/env python
"""
国学AI助手后端启动脚本
"""

import uvicorn
from app.core.config import settings

if __name__ == "__main__":
    print("=" * 50)
    print("国学AI助手后端服务")
    print("=" * 50)
    print(f"应用名称: {settings.APP_NAME}")
    print(f"版本: {settings.APP_VERSION}")
    print(f"主机: {settings.HOST}")
    print(f"端口: {settings.PORT}")
    print(f"调试模式: {settings.DEBUG}")
    print("=" * 50)
    print()
    print("API文档: http://localhost:8000/docs")
    print("健康检查: http://localhost:8000/health")
    print()
    print("按 Ctrl+C 停止服务")
    print("=" * 50)
    
    uvicorn.run(
        "app.main:app",
        host=settings.HOST,
        port=settings.PORT,
        reload=settings.DEBUG
    )
