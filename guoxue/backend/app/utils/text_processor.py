import re
import jieba
from pypinyin import pinyin, Style

class ChineseTextProcessor:
    """中文文本处理工具类"""
    
    @staticmethod
    def add_pinyin(text: str) -> str:
        """为文本添加拼音"""
        result = []
        for char in text:
            if '\u4e00' <= char <= '\u9fff':  # 判断是否为汉字
                py = pinyin(char, style=Style.TONE)[0][0]
                result.append(f"{char}({py})")
            else:
                result.append(char)
        return ''.join(result)
    
    @staticmethod
    def segment_text(text: str) -> list:
        """分词"""
        return list(jieba.cut(text))
    
    @staticmethod
    def extract_entities(text: str) -> dict:
        """提取命名实体（简单版本）"""
        # 这里可以集成更复杂的NER模型
        entities = {
            'persons': [],
            'locations': [],
            'dynasties': []
        }
        
        # 简单的规则匹配
        dynasty_pattern = r'(夏|商|周|秦|汉|三国|晋|南北朝|隋|唐|宋|元|明|清)朝?'
        dynasties = re.findall(dynasty_pattern, text)
        entities['dynasties'] = list(set(dynasties))
        
        return entities
    
    @staticmethod
    def is_classical_chinese(text: str) -> bool:
        """判断是否为文言文"""
        # 简单判断：包含常见文言虚词
        classical_words = ['之', '乎', '者', '也', '矣', '焉', '哉', '耳']
        count = sum(1 for word in classical_words if word in text)
        return count >= 2
