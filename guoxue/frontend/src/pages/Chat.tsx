import React, { useState, useRef, useEffect } from 'react'
import { Card, Input, Button, Space, Typography, List, Tag, message } from 'antd'
import { SendOutlined, RobotOutlined, UserOutlined } from '@ant-design/icons'
import api from '../services/api'

const { Title, Paragraph, Text } = Typography

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(false)
  const [conversationId, setConversationId] = useState<string>('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!inputText.trim()) {
      message.warning('请输入问题')
      return
    }

    const userMessage: Message = { role: 'user', content: inputText }
    setMessages((prev) => [...prev, userMessage])
    setInputText('')
    setLoading(true)

    try {
      const response: any = await api.post('/chat/', {
        message: inputText,
        conversation_id: conversationId,
        history: messages,
      })

      const assistantMessage: Message = {
        role: 'assistant',
        content: response.message,
      }
      setMessages((prev) => [...prev, assistantMessage])
      setConversationId(response.conversation_id)
    } catch (error) {
      message.error('发送失败，请稍后重试')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleSuggestion = (suggestion: string) => {
    setInputText(suggestion)
  }

  const suggestions = [
    '《论语》中有哪些关于学习的名言？',
    '请解释一下"仁义礼智信"的含义',
    '唐诗和宋词有什么区别？',
    '孔子的教育思想是什么？',
  ]

  return (
    <div>
      <Title level={2}>智能问答</Title>
      <Paragraph>向AI提问关于国学的任何问题</Paragraph>

      <Card style={{ height: '600px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: 16 }}>
          {messages.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <RobotOutlined style={{ fontSize: 48, color: '#1890ff' }} />
              <Paragraph style={{ marginTop: 16 }}>
                你好！我是国学AI助手，有什么可以帮你的吗？
              </Paragraph>
              <Space wrap>
                {suggestions.map((suggestion, index) => (
                  <Tag
                    key={index}
                    style={{ cursor: 'pointer', padding: '4px 12px' }}
                    onClick={() => handleSuggestion(suggestion)}
                  >
                    {suggestion}
                  </Tag>
                ))}
              </Space>
            </div>
          ) : (
            <List
              dataSource={messages}
              renderItem={(item) => (
                <List.Item
                  style={{
                    justifyContent: item.role === 'user' ? 'flex-end' : 'flex-start',
                    border: 'none',
                  }}
                >
                  <div
                    style={{
                      maxWidth: '70%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      backgroundColor: item.role === 'user' ? '#1890ff' : '#f0f0f0',
                      color: item.role === 'user' ? 'white' : 'black',
                    }}
                  >
                    <Space>
                      {item.role === 'assistant' && <RobotOutlined />}
                      {item.role === 'user' && <UserOutlined />}
                      <Text style={{ color: item.role === 'user' ? 'white' : 'black' }}>
                        {item.content}
                      </Text>
                    </Space>
                  </div>
                </List.Item>
              )}
            />
          )}
          <div ref={messagesEndRef} />
        </div>

        <Space.Compact style={{ width: '100%' }}>
          <Input
            size="large"
            placeholder="输入你的问题..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onPressEnter={handleSend}
            disabled={loading}
          />
          <Button
            type="primary"
            size="large"
            icon={<SendOutlined />}
            onClick={handleSend}
            loading={loading}
          >
            发送
          </Button>
        </Space.Compact>
      </Card>
    </div>
  )
}

export default Chat
