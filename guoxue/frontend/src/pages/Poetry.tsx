import React, { useState } from 'react'
import { Card, Input, Button, Select, Space, Typography, message } from 'antd'
import api from '../services/api'

const { Title, Paragraph } = Typography

const Poetry: React.FC = () => {
  const [theme, setTheme] = useState('')
  const [style, setStyle] = useState('七言绝句')
  const [poetry, setPoetry] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const styles = [
    { value: '五言绝句', label: '五言绝句' },
    { value: '七言绝句', label: '七言绝句' },
    { value: '五言律诗', label: '五言律诗' },
    { value: '七言律诗', label: '七言律诗' },
  ]

  const handleCreate = async () => {
    if (!theme.trim()) {
      message.warning('请输入诗词主题')
      return
    }

    setLoading(true)
    try {
      const response: any = await api.post('/poetry/', {
        theme,
        style,
      })
      setPoetry(response)
      message.success('创作完成')
    } catch (error) {
      message.error('创作失败，请稍后重试')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Title level={2}>诗词创作</Title>
      <Paragraph>输入主题，AI将为您创作一首古典诗词</Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="创作设置">
          <Space direction="vertical" style={{ width: '100%' }}>
            <div>
              <label>主题：</label>
              <Input
                placeholder="例如：春天、思乡、友情"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                style={{ marginTop: 8 }}
              />
            </div>
            <div>
              <label>格式：</label>
              <Select
                value={style}
                onChange={setStyle}
                options={styles}
                style={{ width: 200, marginTop: 8 }}
              />
            </div>
            <Button type="primary" onClick={handleCreate} loading={loading}>
              开始创作
            </Button>
          </Space>
        </Card>

        {poetry && (
          <Card title={poetry.title}>
            <Paragraph style={{ fontSize: 18, whiteSpace: 'pre-line' }}>
              {poetry.content}
            </Paragraph>
          </Card>
        )}
      </Space>
    </div>
  )
}

export default Poetry
