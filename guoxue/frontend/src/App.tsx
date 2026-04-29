import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import Layout from './components/Layout'
import Home from './pages/Home'
import Translation from './pages/Translation'
import Poetry from './pages/Poetry'
import Query from './pages/Query'
import Punctuation from './pages/Punctuation'
import Couplet from './pages/Couplet'
import Chat from './pages/Chat'

const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/translation" element={<Translation />} />
            <Route path="/poetry" element={<Poetry />} />
            <Route path="/query" element={<Query />} />
            <Route path="/punctuation" element={<Punctuation />} />
            <Route path="/couplet" element={<Couplet />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Layout>
      </Router>
    </ConfigProvider>
  )
}

export default App
