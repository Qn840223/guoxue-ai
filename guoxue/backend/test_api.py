"""
API测试脚本
运行此脚本测试后端API是否正常工作
"""

import requests
import json

BASE_URL = "http://localhost:8000"

def test_health():
    """测试健康检查"""
    print("测试健康检查...")
    response = requests.get(f"{BASE_URL}/health")
    print(f"状态码: {response.status_code}")
    print(f"响应: {response.json()}\n")

def test_translation():
    """测试古文翻译"""
    print("测试古文翻译...")
    data = {
        "text": "学而时习之，不亦说乎",
        "add_annotation": False
    }
    response = requests.post(f"{BASE_URL}/api/translation/", json=data)
    print(f"状态码: {response.status_code}")
    print(f"响应: {json.dumps(response.json(), ensure_ascii=False, indent=2)}\n")

def test_poetry():
    """测试诗词创作"""
    print("测试诗词创作...")
    data = {
        "theme": "春天",
        "style": "七言绝句",
        "mood": "欢快"
    }
    response = requests.post(f"{BASE_URL}/api/poetry/", json=data)
    print(f"状态码: {response.status_code}")
    print(f"响应: {json.dumps(response.json(), ensure_ascii=False, indent=2)}\n")

def test_query():
    """测试典故查询"""
    print("测试典故查询...")
    data = {
        "keyword": "卧薪尝胆",
        "query_type": "allusion"
    }
    response = requests.post(f"{BASE_URL}/api/query/", json=data)
    print(f"状态码: {response.status_code}")
    print(f"响应: {json.dumps(response.json(), ensure_ascii=False, indent=2)}\n")

def test_punctuation():
    """测试智能断句"""
    print("测试智能断句...")
    data = {
        "text": "子曰学而时习之不亦说乎有朋自远方来不亦乐乎"
    }
    response = requests.post(f"{BASE_URL}/api/punctuation/", json=data)
    print(f"状态码: {response.status_code}")
    print(f"响应: {json.dumps(response.json(), ensure_ascii=False, indent=2)}\n")

if __name__ == "__main__":
    print("=" * 50)
    print("国学AI助手 API 测试")
    print("=" * 50)
    print()
    
    try:
        test_health()
        
        print("注意：以下测试需要配置有效的 API 密钥")
        print("如果出现错误，请检查 .env 文件配置\n")
        
        # test_translation()
        # test_poetry()
        # test_query()
        # test_punctuation()
        
        print("基础测试完成！")
        print("取消注释上面的测试函数以测试AI功能")
        
    except requests.exceptions.ConnectionError:
        print("错误：无法连接到后端服务")
        print("请确保后端服务已启动：python -m uvicorn app.main:app --reload")
    except Exception as e:
        print(f"错误：{e}")
