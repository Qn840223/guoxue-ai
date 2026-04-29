import React, { useState } from 'react'
import { Card, Input, Button, Space, Typography, message } from 'antd'
import api from '../services/api'

const { TextArea } = Input
const { Title, Paragraph } = Typography

const Translation: React.FC = () => {
  const [inputText, setInputText] = useState('')
  const [translation, setTranslation] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      message.warning('请输入要翻译的古文')
      return
    }

    setLoading(true)
    try {
      const response: any = await api.post('/translation/', {
        text: inputText,
        add_annotation: false,
      })
      setTranslation(response.translation)
      message.success('翻译完成')
    } catch (error) {
      message.error('翻译失败，请稍后重试')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Title level={2}>古文翻译</Title>
      <Paragraph>输入文言文，AI将为您翻译成现代汉语</Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="输入古文">
          <TextArea
            rows={6}
            placeholder="例如：学而时习之，不亦说乎"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <div style={{ marginTop: 16 }}>
            <Button type="primary" onClick={handleTranslate} loading={loading}>
              开始翻译
            </Button>
          </div>
        </Card>

        {translation && (
          <Card title="翻译结果">
            <Paragraph style={{ fontSize: 16 }}>{translation}</Paragraph>
          </Card>
        )}
      </Space>
    </div>
  )
}

export default Translation
