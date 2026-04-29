import React, { useState } from 'react'
import { Card, Input, Button, Space, Typography, Divider, message } from 'antd'
import api from '../services/api'

const { Title, Paragraph, Text } = Typography

const Couplet: React.FC = () => {
  const [firstLine, setFirstLine] = useState('')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const handleCreate = async () => {
    if (!firstLine.trim()) {
      message.warning('请输入上联')
      return
    }

    setLoading(true)
    try {
      const response: any = await api.post('/couplet/', {
        first_line: firstLine,
      })
      setResult(response)
      message.success('对联生成完成')
    } catch (error) {
      message.error('生成失败，请稍后重试')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const examples = [
    '春回大地千山秀',
    '风声雨声读书声声声入耳',
    '天增岁月人增寿',
  ]

  return (
    <div>
      <Title level={2}>对联生成</Title>
      <Paragraph>输入上联，AI将为您生成对仗工整的下联</Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="输入上联">
          <Input
            size="large"
            placeholder="例如：春回大地千山秀"
            value={firstLine}
            onChange={(e) => setFirstLine(e.target.value)}
            onPressEnter={handleCreate}
          />
          <div style={{ marginTop: 16 }}>
            <Button type="primary" onClick={handleCreate} loading={loading}>
              生成下联
            </Button>
          </div>
          
          <Divider />
          
          <div>
            <Text type="secondary">试试这些示例：</Text>
            <div style={{ marginTop: 8 }}>
              {examples.map((example, index) => (
                <Button
                  key={index}
                  size="small"
                  style={{ marginRight: 8, marginBottom: 8 }}
                  onClick={() => setFirstLine(example)}
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
        </Card>

        {result && (
          <Card title="对联结果">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, marginBottom: 16 }}>
                <Text strong>上联：</Text>
                <Text style={{ color: '#1890ff' }}>{result.first_line}</Text>
              </div>
              <div style={{ fontSize: 24, marginBottom: 16 }}>
                <Text strong>下联：</Text>
                <Text style={{ color: '#52c41a' }}>{result.second_line}</Text>
              </div>
              {result.horizontal_scroll && (
                <div style={{ fontSize: 20 }}>
                  <Text strong>横批：</Text>
                  <Text style={{ color: '#faad14' }}>{result.horizontal_scroll}</Text>
                </div>
              )}
            </div>
          </Card>
        )}
      </Space>
    </div>
  )
}

export default Couplet
