import axios from 'axios'

// 直接调用AI API的配置
const AI_API_KEY = import.meta.env.VITE_API_KEY || ''
const AI_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.deepseek.com/v1'
const AI_MODEL_NAME = import.meta.env.VITE_MODEL_NAME || 'deepseek-chat'

// 创建AI客户端
const aiClient = axios.create({
  baseURL: AI_API_BASE_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${AI_API_KEY}`
  }
})

// AI服务类
class AIService {
  async chatCompletion(messages: any[], temperature = 0.7) {
    try {
      const response = await aiClient.post('/chat/completions', {
        model: AI_MODEL_NAME,
        messages,
        temperature
      })
      return response.data.choices[0].message.content
    } catch (error: any) {
      console.error('AI调用失败:', error)
      throw new Error(error.response?.data?.error?.message || 'AI调用失败，请检查API密钥配置')
    }
  }
}

const aiService = new AIService()

// API服务对象
const api = {
  // 古文翻译
  async post(url: string, data: any) {
    if (url === '/translation/') {
      return this.translate(data)
    } else if (url === '/poetry/') {
      return this.createPoetry(data)
    } else if (url === '/couplet/') {
      return this.createCouplet(data)
    } else if (url === '/query/') {
      return this.queryAllusion(data)
    } else if (url === '/punctuation/') {
      return this.addPunctuation(data)
    } else if (url === '/chat/') {
      return this.chat(data)
    }
    throw new Error('未知的API端点')
  },

  // 古文翻译
  async translate(data: { text: string; add_annotation: boolean }) {
    const systemPrompt = `你是一位精通古汉语的国学专家。
请将用户提供的文言文翻译成现代汉语，要求：
1. 准确传达原文意思
2. 语言流畅自然
3. 保留原文的文学美感`

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `请翻译：${data.text}` }
    ]

    const translation = await aiService.chatCompletion(messages)
    
    return {
      original: data.text,
      translation,
      annotation: null
    }
  },

  // 诗词创作
  async createPoetry(data: { theme: string; style: string; mood?: string }) {
    const systemPrompt = `你是一位才华横溢的古代诗人。
请根据用户提供的主题创作一首${data.style}，要求：
1. 严格遵守${data.style}的格律规则
2. 意境优美，富有诗意
3. 用词典雅，符合古典诗词风格
${data.mood ? `4. 情感基调：${data.mood}` : ''}`

    const userPrompt = `主题：${data.theme}\n请创作一首${data.style}。`

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt }
    ]

    const content = await aiService.chatCompletion(messages, 0.9)

    return {
      title: `《${data.theme}》`,
      content,
      style: data.style,
      explanation: null
    }
  },

  // 对联生成
  async createCouplet(data: { first_line: string }) {
    const systemPrompt = `你是一位精通对联创作的专家。
请根据用户提供的上联，创作对仗工整的下联，要求：
1. 字数相同
2. 词性相对
3. 平仄协调
4. 意境相合
5. 可以提供一个合适的横批

请按以下格式返回：
下联：[你的下联]
横批：[横批]`

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `上联：${data.first_line}` }
    ]

    const result = await aiService.chatCompletion(messages, 0.8)

    // 解析结果
    let second_line = ''
    let horizontal_scroll = null

    for (const line of result.split('\n')) {
      if (line.includes('下联：')) {
        second_line = line.replace('下联：', '').trim()
      } else if (line.includes('横批：')) {
        horizontal_scroll = line.replace('横批：', '').trim()
      }
    }

    if (!second_line) {
      second_line = result.split('\n')[0]
    }

    return {
      first_line: data.first_line,
      second_line,
      horizontal_scroll
    }
  },

  // 典故查询
  async queryAllusion(data: { keyword: string; query_type: string }) {
    const typeMap: any = {
      allusion: '典故',
      person: '历史人物',
      event: '历史事件'
    }

    const queryName = typeMap[data.query_type] || '典故'

    const systemPrompt = `你是一位博学的国学专家。
请详细解释用户查询的${queryName}，包括：
1. 出处和来源
2. 具体含义和背景
3. 相关故事或典籍
4. 现代应用和引申义`

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: `请解释：${data.keyword}` }
    ]

    const content = await aiService.chatCompletion(messages)

    return {
      keyword: data.keyword,
      results: [{ content }]
    }
  },

  // 智能断句
  async addPunctuation(data: { text: string }) {
    const systemPrompt = `你是一位精通古汉语的专家。
请为用户提供的无标点古文添加正确的标点符号，要求：
1. 准确理解句子结构
2. 正确使用标点符号
3. 只返回添加标点后的文本，不要其他说明`

    const messages = [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: data.text }
    ]

    const punctuated = await aiService.chatCompletion(messages)

    return {
      original: data.text,
      punctuated: punctuated.trim()
    }
  },

  // 智能问答
  async chat(data: { message: string; conversation_id?: string; history?: any[] }) {
    const systemPrompt = `你是一位博学的国学专家和教师。
你精通中国古代文学、历史、哲学和文化。
请用通俗易懂的语言回答用户关于国学的问题，要求：
1. 准确专业，引经据典
2. 深入浅出，易于理解
3. 适当举例说明
4. 保持友好和耐心的态度`

    const messages = [{ role: 'system', content: systemPrompt }]

    // 添加历史消息
    if (data.history) {
      messages.push(...data.history)
    }

    // 添加当前消息
    messages.push({ role: 'user', content: data.message })

    const response = await aiService.chatCompletion(messages)

    return {
      message: response,
      conversation_id: data.conversation_id || Date.now().toString()
    }
  }
}

export default api
