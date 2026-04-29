# 国学AI助手 - 项目总结

## 🎉 项目概述

国学AI助手是一个基于人工智能的智能国学学习平台，旨在通过现代技术传承和推广中华传统文化。

## ✨ 核心功能

### 1. 古文翻译 📖
- 文言文到现代汉语的智能翻译
- 保留原文的文学美感
- 可选的词汇注释功能

### 2. 诗词创作 ✍️
- 支持多种诗词格式（五言/七言绝句、律诗）
- 严格遵守格律规则
- 根据主题和情感创作

### 3. 对联生成 🎋
- 根据上联生成对仗工整的下联
- 自动生成合适的横批
- 符合对联创作规则

### 4. 典故查询 🔍
- 查询典故、历史人物、历史事件
- 提供详细的背景和出处
- 相关典籍引用

### 5. 智能断句 📝
- 为无标点古文添加标点
- 准确理解句子结构
- 提高古文阅读体验

### 6. 智能问答 💬
- 回答关于国学的各种问题
- 支持多轮对话
- 专业且易懂的解答

## 🏗️ 技术架构

### 后端技术栈
```
Python 3.9+
├── FastAPI          # Web框架
├── OpenAI API       # AI能力
├── LangChain        # AI编排
├── ChromaDB         # 向量数据库
├── Pydantic         # 数据验证
└── Uvicorn          # ASGI服务器
```

### 前端技术栈
```
React 18 + TypeScript
├── Vite             # 构建工具
├── Ant Design       # UI组件库
├── React Router     # 路由管理
└── Axios            # HTTP客户端
```

## 📁 项目结构

```
guoxue/
├── backend/                 # 后端服务
│   ├── app/
│   │   ├── api/            # API路由
│   │   │   ├── translation.py
│   │   │   ├── poetry.py
│   │   │   ├── couplet.py
│   │   │   ├── query.py
│   │   │   ├── punctuation.py
│   │   │   ├── chat.py
│   │   │   └── knowledge.py
│   │   ├── core/           # 核心配置
│   │   │   └── config.py
│   │   ├── models/         # 数据模型
│   │   │   └── schemas.py
│   │   ├── services/       # 业务逻辑
│   │   │   ├── ai_service.py
│   │   │   └── knowledge_base.py
│   │   ├── utils/          # 工具函数
│   │   │   └── text_processor.py
│   │   └── main.py         # 应用入口
│   ├── data/               # 数据文件
│   │   └── classics_sample.json
│   ├── requirements.txt    # Python依赖
│   ├── .env.example        # 环境变量示例
│   └── test_api.py         # API测试脚本
│
├── frontend/               # 前端应用
│   ├── src/
│   │   ├── components/     # React组件
│   │   │   └── Layout.tsx
│   │   ├── pages/          # 页面组件
│   │   │   ├── Home.tsx
│   │   │   ├── Translation.tsx
│   │   │   ├── Poetry.tsx
│   │   │   ├── Couplet.tsx
│   │   │   ├── Query.tsx
│   │   │   ├── Punctuation.tsx
│   │   │   └── Chat.tsx
│   │   ├── services/       # API服务
│   │   │   └── api.ts
│   │   ├── App.tsx         # 应用根组件
│   │   ├── main.tsx        # 应用入口
│   │   └── index.css       # 全局样式
│   ├── index.html
│   ├── package.json        # Node依赖
│   ├── tsconfig.json       # TypeScript配置
│   └── vite.config.ts      # Vite配置
│
├── docs/                   # 文档
│   ├── API.md             # API文档
│   ├── SETUP.md           # 安装指南
│   ├── FEATURES.md        # 功能说明
│   ├── DEPLOYMENT.md      # 部署指南
│   └── TODO.md            # 开发计划
│
├── README.md              # 项目说明
├── QUICKSTART.md          # 快速开始
├── CONTRIBUTING.md        # 贡献指南
├── LICENSE                # 许可证
├── .gitignore            # Git忽略文件
└── start.bat             # Windows启动脚本
```

## 🚀 快速开始

### 1. 配置后端
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# 编辑 .env 填入API密钥
python -m uvicorn app.main:app --reload
```

### 2. 配置前端
```bash
cd frontend
npm install
npm run dev
```

### 3. 或使用一键启动
```bash
# Windows用户
双击 start.bat
```

## 📊 API端点

| 端点 | 方法 | 功能 |
|------|------|------|
| `/api/translation/` | POST | 古文翻译 |
| `/api/poetry/` | POST | 诗词创作 |
| `/api/couplet/` | POST | 对联生成 |
| `/api/query/` | POST | 典故查询 |
| `/api/punctuation/` | POST | 智能断句 |
| `/api/chat/` | POST | 智能问答 |
| `/api/knowledge/*` | GET | 知识库查询 |

## 🎯 特色亮点

1. **AI驱动**：基于大语言模型，理解能力强
2. **专业准确**：针对国学领域优化
3. **易于使用**：简洁直观的用户界面
4. **可扩展**：模块化设计，易于添加新功能
5. **开源免费**：MIT许可证，完全开源

## 📈 未来规划

- 🎓 教育版本（面向学校）
- 📱 移动应用（iOS/Android）
- 🌍 国际化支持
- 🎨 多模态功能（图片、语音）
- 🧠 知识图谱构建
- 📚 更丰富的知识库

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解如何贡献。

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE)

## 📞 联系方式

- GitHub Issues
- 项目讨论区

---

**传承中华文化，让国学学习更简单** 📚✨
