# 安装和配置指南

## 环境要求

- Python 3.9+
- Node.js 16+
- npm 或 yarn

## 后端设置

### 1. 安装依赖

```bash
cd backend
pip install -r requirements.txt
```

### 2. 配置环境变量

复制 `.env.example` 为 `.env`：

```bash
cp .env.example .env
```

编辑 `.env` 文件，填入你的API密钥：

```env
OPENAI_API_KEY=your_api_key_here
```

### 3. 启动后端服务

```bash
python -m uvicorn app.main:app --reload
```

服务将在 `http://localhost:8000` 启动

访问 `http://localhost:8000/docs` 查看API文档

## 前端设置

### 1. 安装依赖

```bash
cd frontend
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

前端将在 `http://localhost:3000` 启动

## 使用其他AI模型

### 使用 DeepSeek

```env
OPENAI_BASE_URL=https://api.deepseek.com/v1
OPENAI_API_KEY=your_deepseek_key
MODEL_NAME=deepseek-chat
```

### 使用本地模型（Ollama）

```env
OPENAI_BASE_URL=http://localhost:11434/v1
OPENAI_API_KEY=ollama
MODEL_NAME=qwen:7b
```

## 常见问题

### Q: 如何获取OpenAI API密钥？
A: 访问 https://platform.openai.com/api-keys 注册并创建API密钥

### Q: 可以使用国内的AI服务吗？
A: 可以，支持任何兼容OpenAI API格式的服务，如DeepSeek、通义千问等

### Q: 如何部署到生产环境？
A: 参考 `docs/DEPLOYMENT.md` 文档
