"""
国学知识库服务
用于管理和检索国学相关知识
"""

import json
from pathlib import Path
from typing import List, Dict, Optional

class KnowledgeBase:
    """国学知识库"""
    
    def __init__(self, data_path: str = "data/classics_sample.json"):
        self.data_path = Path(data_path)
        self.data = self._load_data()
    
    def _load_data(self) -> dict:
        """加载知识库数据"""
        if self.data_path.exists():
            with open(self.data_path, 'r', encoding='utf-8') as f:
                return json.load(f)
        return {"classics": [], "allusions": [], "persons": []}
    
    def search_allusion(self, keyword: str) -> Optional[Dict]:
        """搜索典故"""
        for allusion in self.data.get("allusions", []):
            if keyword in allusion.get("name", ""):
                return allusion
        return None
    
    def search_person(self, name: str) -> Optional[Dict]:
        """搜索历史人物"""
        for person in self.data.get("persons", []):
            if name in person.get("name", ""):
                return person
        return None
    
    def search_classic(self, title: str) -> Optional[Dict]:
        """搜索经典文献"""
        for classic in self.data.get("classics", []):
            if title in classic.get("title", ""):
                return classic
        return None
    
    def get_random_excerpt(self) -> Optional[Dict]:
        """获取随机经典摘录"""
        import random
        classics = self.data.get("classics", [])
        if classics:
            classic = random.choice(classics)
            if classic.get("excerpts"):
                excerpt = random.choice(classic["excerpts"])
                return {
                    "title": classic["title"],
                    "author": classic["author"],
                    **excerpt
                }
        return None
    
    def get_all_dynasties(self) -> List[str]:
        """获取所有朝代"""
        dynasties = set()
        for classic in self.data.get("classics", []):
            if classic.get("dynasty"):
                dynasties.add(classic["dynasty"])
        for person in self.data.get("persons", []):
            if person.get("dynasty"):
                dynasties.add(person["dynasty"])
        return sorted(list(dynasties))
