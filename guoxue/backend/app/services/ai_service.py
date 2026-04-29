from openai import OpenAI
from app.core.config import settings
from typing import Optional

class AIService:
    """AI服务基类"""
    
    def __init__(self):
        self.client = OpenAI(
            api_key=settings.OPENAI_API_KEY,
            base_url=settings.OPENAI_BASE_URL
        )
        self.model = settings.MODEL_NAME
    
    def chat_completion(self, messages: list, temperature: float = 0.7) -> str:
        """调用AI模型进行对话"""
        try:
            response = self.client.chat.completions.create(
                model=self.model,
                messages=messages,
                temperature=temperature
            )
            return response.choices[0].message.content
        except Exception as e:
            raise Exception(f"AI调用失败: {str(e)}")

class TranslationService(AIService):
    """古文翻译服务"""
    
    def translate(self, text: str, add_annotation: bool = False) -> dict:
        """翻译古文"""
        system_prompt = """你是一位精通古汉语的国学专家。
请将用户提供的文言文翻译成现代汉语，要求：
1. 准确传达原文意思
2. 语言流畅自然
3. 保留原文的文学美感"""

        if add_annotation:
            system_prompt += "\n4. 为重要词汇和典故添加注释"
        
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"请翻译：{text}"}
        ]
        
        result = self.chat_completion(messages)
        
        return {
            "original": text,
            "translation": result,
            "annotation": None
        }

class PoetryService(AIService):
    """诗词创作服务"""
    
    def create_poetry(self, theme: str, style: str = "七言绝句", mood: Optional[str] = None) -> dict:
        """创作诗词"""
        system_prompt = f"""你是一位才华横溢的古代诗人。
请根据用户提供的主题创作一首{style}，要求：
1. 严格遵守{style}的格律规则
2. 意境优美，富有诗意
3. 用词典雅，符合古典诗词风格"""

        if mood:
            system_prompt += f"\n4. 情感基调：{mood}"
        
        user_prompt = f"主题：{theme}\n请创作一首{style}，并给出简要解释。"
        
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt}
        ]
        
        result = self.chat_completion(messages, temperature=0.9)
        
        # 简单解析结果
        lines = result.strip().split('\n')
        title = f"《{theme}》"
        content = result
        
        return {
            "title": title,
            "content": content,
            "style": style,
            "explanation": None
        }

class QueryService(AIService):
    """典故查询服务"""
    
    def query_allusion(self, keyword: str, query_type: str = "allusion") -> dict:
        """查询典故"""
        type_map = {
            "allusion": "典故",
            "person": "历史人物",
            "event": "历史事件"
        }
        
        query_name = type_map.get(query_type, "典故")
        
        system_prompt = f"""你是一位博学的国学专家。
请详细解释用户查询的{query_name}，包括：
1. 出处和来源
2. 具体含义和背景
3. 相关故事或典籍
4. 现代应用和引申义"""
        
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"请解释：{keyword}"}
        ]
        
        result = self.chat_completion(messages)
        
        return {
            "keyword": keyword,
            "results": [{"content": result}]
        }

class PunctuationService(AIService):
    """智能断句服务"""
    
    def add_punctuation(self, text: str) -> dict:
        """为古文添加标点"""
        system_prompt = """你是一位精通古汉语的专家。
请为用户提供的无标点古文添加正确的标点符号，要求：
1. 准确理解句子结构
2. 正确使用标点符号
3. 只返回添加标点后的文本，不要其他说明"""
        
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": text}
        ]
        
        result = self.chat_completion(messages)
        
        return {
            "original": text,
            "punctuated": result.strip()
        }

class CoupletService(AIService):
    """对联生成服务"""
    
    def create_couplet(self, first_line: str) -> dict:
        """生成对联"""
        system_prompt = """你是一位精通对联创作的专家。
请根据用户提供的上联，创作对仗工整的下联，要求：
1. 字数相同
2. 词性相对
3. 平仄协调
4. 意境相合
5. 可以提供一个合适的横批

请按以下格式返回：
下联：[你的下联]
横批：[横批]"""
        
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": f"上联：{first_line}"}
        ]
        
        result = self.chat_completion(messages, temperature=0.8)
        
        # 解析结果
        second_line = ""
        horizontal_scroll = None
        
        for line in result.strip().split('\n'):
            if line.startswith('下联：'):
                second_line = line.replace('下联：', '').strip()
            elif line.startswith('横批：'):
                horizontal_scroll = line.replace('横批：', '').strip()
        
        if not second_line:
            second_line = result.strip().split('\n')[0]
        
        return {
            "first_line": first_line,
            "second_line": second_line,
            "horizontal_scroll": horizontal_scroll
        }

class ChatService(AIService):
    """智能问答服务"""
    
    def chat(self, message: str, history: list = None) -> str:
        """智能问答"""
        system_prompt = """你是一位博学的国学专家和教师。
你精通中国古代文学、历史、哲学和文化。
请用通俗易懂的语言回答用户关于国学的问题，要求：
1. 准确专业，引经据典
2. 深入浅出，易于理解
3. 适当举例说明
4. 保持友好和耐心的态度"""
        
        messages = [{"role": "system", "content": system_prompt}]
        
        # 添加历史消息
        if history:
            messages.extend(history)
        
        # 添加当前消息
        messages.append({"role": "user", "content": message})
        
        result = self.chat_completion(messages)
        
        return result
