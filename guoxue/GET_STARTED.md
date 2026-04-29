# 🚀 开始使用国学AI助手

## 欢迎！

恭喜你获得了一个完整的国学AI助手项目！这个指南将帮助你快速上手。

## 📋 项目已包含的内容

✅ **完整的后端服务**（Python + FastAPI）
✅ **现代化的前端界面**（React + TypeScript + Ant Design）
✅ **6大核心功能**（翻译、诗词、对联、查询、断句、问答）
✅ **完整的文档**（API文档、使用指南、部署指南）
✅ **一键启动脚本**（Windows）
✅ **Docker支持**（容器化部署）
✅ **示例数据**（经典文献、典故、人物）

## 🎯 三步开始使用

### 第一步：获取API密钥

你需要一个AI服务的API密钥。推荐选项：

**选项1：OpenAI（国际用户）**
- 访问：https://platform.openai.com/api-keys
- 注册并创建API密钥
- 费用：按使用量计费

**选项2：DeepSeek（推荐国内用户）**
- 访问：https://platform.deepseek.com
- 注册并创建API密钥
- 费用：价格实惠，性能优秀

**选项3：通义千问（阿里云）**
- 访问：https://dashscope.aliyun.com
- 注册并创建API密钥
- 费用：有免费额度

**选项4：本地模型（免费）**
- 安装Ollama：https://ollama.ai
- 下载模型：`ollama pull qwen:7b`
- 无需API密钥，完全本地运行

### 第二步：配置环境

1. **配置后端**

```bash
cd backend
copy .env.example .env
```

编辑 `.env` 文件，填入你的API密钥：

```env
# 使用DeepSeek（推荐）
OPENAI_API_KEY=your_deepseek_key_here
OPENAI_BASE_URL=https://api.deepseek.com/v1
MODEL_NAME=deepseek-chat
```

2. **安装依赖**

```bash
# 后端
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

# 前端
cd frontend
npm install
```

### 第三步：启动服务

**方式1：使用一键启动脚本（推荐）**
```bash
双击 start.bat
```

**方式2：手动启动**
```bash
# 终端1 - 启动后端
cd backend
venv\Scripts\activate
python run.py

# 终端2 - 启动前端
cd frontend
npm run dev
```

**方式3：使用Docker**
```bash
docker-compose up
```

## 🌐 访问应用

启动成功后，在浏览器中访问：

- **前端界面**：http://localhost:3000
- **API文档**：http://localhost:8000/docs
- **健康检查**：http://localhost:8000/health

## 🎨 功能演示

### 1. 古文翻译
```
输入：学而时习之，不亦说乎
点击：开始翻译
查看：现代汉语翻译结果
```

### 2. 诗词创作
```
主题：春天
格式：七言绝句
点击：开始创作
查看：AI创作的诗词
```

### 3. 对联生成
```
上联：春回大地千山秀
点击：生成下联
查看：对仗工整的下联和横批
```

### 4. 典故查询
```
关键词：卧薪尝胆
类型：典故
点击：开始查询
查看：详细的典故解释
```

### 5. 智能断句
```
输入：子曰学而时习之不亦说乎
点击：开始断句
查看：添加标点后的文本
```

### 6. 智能问答
```
问题：孔子的教育思想是什么？
点击：发送
查看：AI的专业解答
```

## 📚 下一步

### 学习更多
- 📖 阅读 [使用指南](USAGE_GUIDE.md)
- 🔧 查看 [API文档](docs/API.md)
- 🚀 了解 [部署方法](docs/DEPLOYMENT.md)
- 📋 查看 [开发计划](docs/TODO.md)

### 自定义开发
- 添加新功能
- 扩充知识库
- 优化AI提示词
- 美化界面

### 贡献项目
- 提交Issue
- 发起Pull Request
- 分享使用经验
- 参与讨论

## ❓ 遇到问题？

### 常见问题

**Q: 提示"无法连接到后端服务"？**
A: 确保后端服务已启动，访问 http://localhost:8000/health 检查

**Q: API调用失败？**
A: 检查 `.env` 文件中的API密钥是否正确

**Q: 端口被占用？**
A: 修改配置文件中的端口号

**Q: 依赖安装失败？**
A: 确保Python 3.9+和Node.js 16+已正确安装

### 获取帮助

- 📖 查看文档：`docs/` 目录
- 🐛 提交Issue：GitHub Issues
- 💬 讨论交流：项目讨论区

## 🎉 开始探索

现在你已经准备好了！打开浏览器，访问 http://localhost:3000，开始你的国学AI之旅吧！

**传承中华文化，让国学学习更简单** 📚✨

---

## 📊 项目统计

- **代码文件**：50+
- **功能模块**：6个
- **API端点**：15+
- **文档页面**：10+
- **开发时间**：精心打造

## 🌟 特别感谢

感谢你选择使用国学AI助手！如果觉得项目有帮助，请给个Star⭐

---

**祝你使用愉快！有任何问题随时联系。** 🚀
