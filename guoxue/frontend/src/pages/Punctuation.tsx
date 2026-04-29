import React, { useState } from 'react'
import { Card, Input, Button, Space, Typography, message } from 'antd'
import api from '../services/api'

const { TextArea } = Input
const { Title, Paragraph } = Typography

const Punctuation: React.FC = () => {
  const [inputText, setInputText] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handlePunctuate = async () => {
    if (!inputText.trim()) {
      message.warning('请输入需要断句的古文')
      return
    }

    setLoading(true)
    try {
      const response: any = await api.post('/punctuation/', {
        text: inputText,
      })
      setResult(response.punctuated)
      message.success('断句完成')
    } catch (error) {
      message.error('断句失败，请稍后重试')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Title level={2}>智能断句</Title>
      <Paragraph>为无标点的古文自动添加标点符号</Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="输入古文（无标点）">
          <TextArea
            rows={6}
            placeholder="例如：子曰学而时习之不亦说乎有朋自远方来不亦乐乎"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div style={{ marginTop: 16 }}>
            <Button type="primary" onClick={handlePunctuate} loading={loading}>
              开始断句
            </Button>
          </div>
        </Card>

        {result && (
          <Card title="断句结果">
            <Paragraph style={{ fontSize: 16 }}>{result}</Paragraph>
          </Card>
        )}
      </Space>
    </div>
  )
}

export default Punctuation
