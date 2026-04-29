import React from 'react'
import { Layout as AntLayout, Menu } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  HomeOutlined,
  TranslationOutlined,
  EditOutlined,
  SearchOutlined,
  FileTextOutlined,
  MessageOutlined,
} from '@ant-design/icons'

const { Header, Content, Footer } = AntLayout

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const menuItems = [
    { key: '/', label: '首页', icon: <HomeOutlined /> },
    { key: '/translation', label: '古文翻译', icon: <TranslationOutlined /> },
    { key: '/poetry', label: '诗词创作', icon: <EditOutlined /> },
    { key: '/couplet', label: '对联生成', icon: <EditOutlined /> },
    { key: '/query', label: '典故查询', icon: <SearchOutlined /> },
    { key: '/punctuation', label: '智能断句', icon: <FileTextOutlined /> },
    { key: '/chat', label: '智能问答', icon: <MessageOutlined /> },
  ]

  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ color: 'white', fontSize: '20px', marginRight: '50px' }}>
          📚 国学AI助手
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '24px 50px' }}>
        {children}
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        国学AI助手 ©2026 - 传承中华文化
      </Footer>
    </AntLayout>
  )
}

export default Layout
