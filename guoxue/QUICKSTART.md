# 快速开始指南

## 5分钟快速启动

### 前置要求

- Python 3.9+ 
- Node.js 16+
- OpenAI API密钥（或其他兼容的AI服务）

### 步骤 1: 克隆项目

```bash
git clone <your-repo-url>
cd guoxue
```

### 步骤 2: 配置后端

```bash
cd backend

# 创建虚拟环境
python -m venv venv

# 激活虚拟环境 (Windows)
venv\Scripts\activate

# 安装依赖
pip install -r requirements.txt

# 配置环境变量
copy .env.example .env
# 编辑 .env 文件，填入你的 API 密钥
```

### 步骤 3: 启动后端

```bash
python -m uvicorn app.main:app --reload
```

后端将在 http://localhost:8000 启动

### 步骤 4: 配置前端

打开新的终端：

```bash
cd frontend

# 安装依赖
npm install
```

### 步骤 5: 启动前端

```bash
npm run dev
```

前端将在 http://localhost:3000 启动

### 步骤 6: 开始使用

在浏览器中打开 http://localhost:3000，你将看到：

- 📖 **古文翻译**：输入"学而时习之，不亦说乎"试试
- ✍️ **诗词创作**：输入主题"春天"，选择"七言绝句"
- 🔍 **典故查询**：搜索"卧薪尝胆"
- 📝 **智能断句**：输入无标点古文

## 使用 Windows 一键启动

双击 `start.bat` 文件即可自动启动前后端服务！

## 常见问题

### Q: 提示找不到 OpenAI API 密钥？
A: 编辑 `backend/.env` 文件，设置 `OPENAI_API_KEY=你的密钥`

### Q: 可以使用国内的AI服务吗？
A: 可以！在 `.env` 中配置：
```env
OPENAI_BASE_URL=https://api.deepseek.com/v1
OPENAI_API_KEY=你的DeepSeek密钥
MODEL_NAME=deepseek-chat
```

### Q: 端口被占用怎么办？
A: 修改端口：
- 后端：`uvicorn app.main:app --port 8001`
- 前端：修改 `vite.config.ts` 中的 `port`

## 下一步

- 📚 阅读 [完整文档](docs/SETUP.md)
- 🔧 查看 [API文档](http://localhost:8000/docs)
- 🎯 了解 [功能详情](docs/FEATURES.md)
- 🚀 学习 [部署指南](docs/DEPLOYMENT.md)

## 获取帮助

遇到问题？查看：
- [GitHub Issues](your-repo-url/issues)
- [API文档](http://localhost:8000/docs)
- [项目文档](docs/)

祝你使用愉快！📚✨
