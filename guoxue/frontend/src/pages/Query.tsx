import React, { useState } from 'react'
import { Card, Input, Button, Select, Space, Typography, message } from 'antd'
import api from '../services/api'

const { Title, Paragraph } = Typography

const Query: React.FC = () => {
  const [keyword, setKeyword] = useState('')
  const [queryType, setQueryType] = useState('allusion')
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const types = [
    { value: 'allusion', label: '典故' },
    { value: 'person', label: '历史人物' },
    { value: 'event', label: '历史事件' },
  ]

  const handleQuery = async () => {
    if (!keyword.trim()) {
      message.warning('请输入查询关键词')
      return
    }

    setLoading(true)
    try {
      const response: any = await api.post('/query/', {
        keyword,
        query_type: queryType,
      })
      setResult(response)
      message.success('查询完成')
    } catch (error) {
      message.error('查询失败，请稍后重试')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Title level={2}>典故查询</Title>
      <Paragraph>查询典故、历史人物和事件的详细信息</Paragraph>

      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Card title="查询设置">
          <Space direction="vertical" style={{ width: '100%' }}>
            <div>
              <label>关键词：</label>
              <Input
                placeholder="例如：卧薪尝胆、孔子、赤壁之战"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                style={{ marginTop: 8 }}
              />
            </div>
            <div>
              <label>类型：</label>
              <Select
                value={queryType}
                onChange={setQueryType}
                options={types}
                style={{ width: 200, marginTop: 8 }}
              />
            </div>
            <Button type="primary" onClick={handleQuery} loading={loading}>
              开始查询
            </Button>
          </Space>
        </Card>

        {result && (
          <Card title={`查询结果：${result.keyword}`}>
            {result.results.map((item: any, index: number) => (
              <Paragraph key={index} style={{ fontSize: 16 }}>
                {item.content}
              </Paragraph>
            ))}
          </Card>
        )}
      </Space>
    </div>
  )
}

export default Query
