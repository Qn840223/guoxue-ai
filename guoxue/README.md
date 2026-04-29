# 国学AI助手 (Chinese Classics AI Assistant)

<div align="center">

📚 一个基于AI的智能国学学习助手 📚

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/Python-3.9+-blue.svg)](https://www.python.org/)
[![React](https://img.shields.io/badge/React-18-61dafb.svg)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.109-009688.svg)](https://fastapi.tiangolo.com/)

[功能特性](#功能特性) • [快速开始](#快速开始) • [使用指南](USAGE_GUIDE.md) • [API文档](docs/API.md) • [贡献指南](CONTRIBUTING.md)

</div>

---

## ✨ 功能特性

### 核心功能

| 功能 | 描述 | 状态 |
|------|------|------|
| 📖 **古文翻译** | 文言文到现代汉语的智能翻译 | ✅ 已完成 |
| ✍️ **诗词创作** | 按格律自动生成诗词（绝句、律诗） | ✅ 已完成 |
| 🎋 **对联生成** | 根据上联生成对仗工整的下联 | ✅ 已完成 |
| 🔍 **典故查询** | 查询典故、历史人物、历史事件 | ✅ 已完成 |
| 📝 **智能断句** | 为古文自动添加标点符号 | ✅ 已完成 |
| 💬 **智能问答** | 回答关于国学的各种问题 | ✅ 已完成 |

### 高级功能（规划中）

- 🎨 注音标注
- 📚 经典文献检索
- 🎓 背景知识讲解
- 🧠 知识图谱
- 📱 移动应用

## 🎯 项目亮点

- ✅ **AI驱动**：基于大语言模型，理解能力强
- ✅ **专业准确**：针对国学领域优化
- ✅ **易于使用**：简洁直观的用户界面
- ✅ **完整文档**：详细的使用和开发文档
- ✅ **开源免费**：MIT许可证，完全开源
- ✅ **可扩展**：模块化设计，易于添加新功能

## 🚀 快速开始

### 方式一：一键启动（Windows）

```bash
# 1. 配置API密钥
cd backend
copy .env.example .env
# 编辑 .env 文件，填入你的API密钥

# 2. 双击启动
双击 start.bat
```

### 方式二：手动启动

**后端启动**：
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # Linux/Mac
pip install -r requirements.txt
python run.py
```

**前端启动**：
```bash
cd frontend
npm install
npm run dev
```

### 方式三：Docker部署

```bash
docker-compose up
```

### 访问应用

- 🌐 前端界面：http://localhost:3000
- 📚 API文档：http://localhost:8000/docs
- ❤️ 健康检查：http://localhost:8000/health

## 📖 详细文档

- 📘 [快速开始指南](GET_STARTED.md) - 新手必读
- 📗 [使用指南](USAGE_GUIDE.md) - 功能使用说明
- 📙 [API文档](docs/API.md) - 接口说明
- 📕 [部署指南](docs/DEPLOYMENT.md) - 生产环境部署
- 📔 [开发计划](docs/TODO.md) - 未来规划

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

## 项目结构

```
guoxue/
├── backend/              # 后端服务
│   ├── app/
│   │   ├── api/         # API路由
│   │   ├── core/        # 核心配置
│   │   ├── models/      # 数据模型
│   │   ├── services/    # 业务逻辑
│   │   └── utils/       # 工具函数
│   ├── data/            # 数据文件
│   └── requirements.txt
├── frontend/            # 前端应用
│   ├── src/
│   │   ├── components/  # React组件
│   │   ├── pages/       # 页面
│   │   ├── services/    # API服务
│   │   └── utils/       # 工具函数
│   └── package.json
└── docs/                # 文档

```

## 快速开始

### 后端启动

```bash
cd backend
pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

### 前端启动

```bash
cd frontend
npm install
npm start
```

## 配置

在 `backend/.env` 文件中配置：

```env
OPENAI_API_KEY=your_api_key_here
OPENAI_BASE_URL=https://api.openai.com/v1
MODEL_NAME=gpt-4
```

## 使用示例

### 古文翻译
```
输入：学而时习之，不亦说乎
输出：学习知识并且按时温习，不也是很愉快的事吗？
```

### 诗词创作
```
输入：请写一首关于春天的七言绝句
输出：春风拂柳绿如烟，
     细雨润花红满园。
     燕子归来寻旧巢，
     莺歌燕舞乐无边。
```

## 开发计划

- [x] 项目架构搭建
- [ ] 古文翻译功能
- [ ] 诗词创作功能
- [ ] 典故查询功能
- [ ] 前端界面开发
- [ ] 知识库构建
- [ ] 部署上线

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT License


## 📸 界面预览

### 首页
- 功能导航卡片
- 快速访问入口

### 古文翻译
- 输入文言文
- 一键翻译
- 查看现代汉语结果

### 诗词创作
- 选择主题和格式
- AI自动创作
- 符合格律规则

### 对联生成
- 输入上联
- 生成下联和横批
- 对仗工整

## 🎓 使用示例

### 古文翻译
```
输入：学而时习之，不亦说乎？
输出：学习知识并且按时温习，不也是很愉快的事吗？
```

### 诗词创作
```
主题：春天
格式：七言绝句

输出：
《春天》
春风拂柳绿如烟，
细雨润花红满园。
燕子归来寻旧巢，
莺歌燕舞乐无边。
```

### 对联生成
```
上联：春回大地千山秀
下联：日照神州万木荣
横批：春满人间
```

## ⚙️ 配置说明

### API密钥配置

编辑 `backend/.env` 文件：

```env
# OpenAI（国际用户）
OPENAI_API_KEY=your_api_key_here
OPENAI_BASE_URL=https://api.openai.com/v1
MODEL_NAME=gpt-4

# DeepSeek（推荐国内用户）
OPENAI_API_KEY=your_deepseek_key
OPENAI_BASE_URL=https://api.deepseek.com/v1
MODEL_NAME=deepseek-chat

# 通义千问
OPENAI_API_KEY=your_qwen_key
OPENAI_BASE_URL=https://dashscope.aliyuncs.com/compatible-mode/v1
MODEL_NAME=qwen-plus

# 本地模型（Ollama）
OPENAI_API_KEY=ollama
OPENAI_BASE_URL=http://localhost:11434/v1
MODEL_NAME=qwen:7b
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

详细API文档：http://localhost:8000/docs

## 🤝 贡献

欢迎各种形式的贡献！

### 如何贡献

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

查看 [贡献指南](CONTRIBUTING.md) 了解更多。

### 需要帮助的领域

- 🌐 国际化支持
- 📚 扩充国学知识库
- 🎨 UI/UX 改进
- 📝 文档完善
- 🧪 测试覆盖
- 🚀 性能优化

## 📈 开发计划

查看 [TODO.md](docs/TODO.md) 了解详细的开发计划。

### 近期计划
- [ ] 完善知识库数据
- [ ] 添加单元测试
- [ ] 性能优化
- [ ] 用户系统

### 长期规划
- [ ] 移动应用
- [ ] 知识图谱
- [ ] 多模态支持
- [ ] 教育版本

## ❓ 常见问题

### Q: 如何获取API密钥？
A: 访问相应AI服务商的官网注册并创建API密钥。推荐国内用户使用DeepSeek。

### Q: 可以完全离线使用吗？
A: 可以！使用Ollama运行本地模型，无需API密钥。

### Q: 支持哪些AI模型？
A: 支持所有兼容OpenAI API格式的模型，包括GPT-4、DeepSeek、通义千问、本地模型等。

### Q: 如何部署到生产环境？
A: 查看 [部署指南](docs/DEPLOYMENT.md)。

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件。

## 🙏 致谢

- OpenAI - 提供强大的AI能力
- FastAPI - 优秀的Python Web框架
- React - 现代化的前端框架
- Ant Design - 精美的UI组件库

## 📞 联系方式

- GitHub Issues: [提交问题](your-repo-url/issues)
- 项目讨论: [参与讨论](your-repo-url/discussions)

## ⭐ Star History

如果这个项目对你有帮助，请给个Star⭐支持一下！

---

<div align="center">

**传承中华文化，让国学学习更简单** 📚✨

Made with ❤️ by [Your Name]

</div>
