import React from 'react'
import { Card, Row, Col, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import {
  HomeOutlined,
  TranslationOutlined,
  EditOutlined,
  SearchOutlined,
  FileTextOutlined,
  MessageOutlined,
} from '@ant-design/icons'

const { Title, Paragraph } = Typography

const Home: React.FC = () => {
  const navigate = useNavigate()

  const features = [
    {
      title: '古文翻译',
      icon: <TranslationOutlined style={{ fontSize: 48, color: '#1890ff' }} />,
      description: '将文言文智能翻译成现代汉语，准确理解古文含义',
      path: '/translation',
    },
    {
      title: '诗词创作',
      icon: <EditOutlined style={{ fontSize: 48, color: '#52c41a' }} />,
      description: '按照格律自动创作诗词，体验古典文学之美',
      path: '/poetry',
    },
    {
      title: '对联生成',
      icon: <EditOutlined style={{ fontSize: 48, color: '#722ed1' }} />,
      description: '根据上联生成对仗工整的下联，传承对联文化',
      path: '/couplet',
    },
    {
      title: '典故查询',
      icon: <SearchOutlined style={{ fontSize: 48, color: '#faad14' }} />,
      description: '快速查找典故出处和含义，深入了解历史文化',
      path: '/query',
    },
    {
      title: '智能断句',
      icon: <FileTextOutlined style={{ fontSize: 48, color: '#f5222d' }} />,
      description: '为古文自动添加标点符号，提高阅读体验',
      path: '/punctuation',
    },
    {
      title: '智能问答',
      icon: <MessageOutlined style={{ fontSize: 48, color: '#13c2c2' }} />,
      description: '向AI提问关于国学的任何问题，获得专业解答',
      path: '/chat',
    },
  ]

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 48 }}>
        <Title level={1}>欢迎使用国学AI助手</Title>
        <Paragraph style={{ fontSize: 18 }}>
          传承中华文化，让国学学习更简单
        </Paragraph>
      </div>

      <Row gutter={[24, 24]}>
        {features.map((feature) => (
          <Col xs={24} sm={12} lg={6} key={feature.title}>
            <Card
              hoverable
              onClick={() => navigate(feature.path)}
              style={{ height: '100%', textAlign: 'center' }}
            >
              <div style={{ marginBottom: 16 }}>{feature.icon}</div>
              <Title level={4}>{feature.title}</Title>
              <Paragraph>{feature.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default Home
