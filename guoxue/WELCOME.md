# 🎉 欢迎使用国学AI助手！

<div align="center">

## 📚 传承中华文化，让国学学习更简单 📚

![Status](https://img.shields.io/badge/状态-已完成-success)
![Files](https://img.shields.io/badge/文件-61+-blue)
![Features](https://img.shields.io/badge/功能-6个-orange)
![License](https://img.shields.io/badge/许可证-MIT-green)

</div>

---

## 🎊 恭喜！你已经拥有了一个完整的国学AI助手项目！

这个项目包含：

✅ **完整的后端服务**（Python + FastAPI）  
✅ **现代化的前端界面**（React + TypeScript）  
✅ **6大核心功能**（翻译、诗词、对联、查询、断句、问答）  
✅ **15+详细文档**（使用、开发、部署）  
✅ **Docker支持**（一键部署）  
✅ **61个项目文件**（代码、配置、文档）  

---

## 🚀 三步开始使用

### 第一步：获取API密钥 🔑

选择一个AI服务提供商：

| 服务商 | 推荐指数 | 特点 | 获取地址 |
|--------|---------|------|---------|
| **DeepSeek** | ⭐⭐⭐⭐⭐ | 国内访问快，价格实惠 | https://platform.deepseek.com |
| **OpenAI** | ⭐⭐⭐⭐ | 性能强大，国际标准 | https://platform.openai.com |
| **通义千问** | ⭐⭐⭐⭐ | 阿里云，有免费额度 | https://dashscope.aliyun.com |
| **Ollama** | ⭐⭐⭐ | 完全免费，本地运行 | https://ollama.ai |

### 第二步：配置环境 ⚙️

```bash
# 1. 进入后端目录
cd backend

# 2. 复制环境变量文件
copy .env.example .env

# 3. 编辑 .env 文件，填入你的API密钥
# 使用记事本或任何文本编辑器打开 .env
```

**配置示例**（使用DeepSeek）：
```env
OPENAI_API_KEY=sk-your-deepseek-key-here
OPENAI_BASE_URL=https://api.deepseek.com/v1
MODEL_NAME=deepseek-chat
```

### 第三步：启动应用 🎯

**最简单的方式**：
```bash
双击 start.bat 文件
```

**或者手动启动**：
```bash
# 终端1 - 后端
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python run.py

# 终端2 - 前端
cd frontend
npm install
npm run dev
```

---

## 🌐 访问应用

启动成功后，打开浏览器访问：

| 服务 | 地址 | 说明 |
|------|------|------|
| 🎨 **前端界面** | http://localhost:3000 | 用户界面 |
| 📚 **API文档** | http://localhost:8000/docs | 交互式API文档 |
| ❤️ **健康检查** | http://localhost:8000/health | 服务状态 |

---

## 🎯 功能演示

### 1️⃣ 古文翻译
```
访问：http://localhost:3000/translation
输入：学而时习之，不亦说乎
点击：开始翻译
结果：学习知识并且按时温习，不也是很愉快的事吗？
```

### 2️⃣ 诗词创作
```
访问：http://localhost:3000/poetry
主题：春天
格式：七言绝句
点击：开始创作
结果：AI创作的七言绝句诗词
```

### 3️⃣ 对联生成
```
访问：http://localhost:3000/couplet
上联：春回大地千山秀
点击：生成下联
结果：下联 + 横批
```

### 4️⃣ 典故查询
```
访问：http://localhost:3000/query
关键词：卧薪尝胆
类型：典故
点击：开始查询
结果：详细的典故解释
```

### 5️⃣ 智能断句
```
访问：http://localhost:3000/punctuation
输入：子曰学而时习之不亦说乎
点击：开始断句
结果：子曰：学而时习之，不亦说乎？
```

### 6️⃣ 智能问答
```
访问：http://localhost:3000/chat
问题：孔子的教育思想是什么？
点击：发送
结果：AI的专业解答
```

---

## 📚 文档导航

### 🌟 新手必读
- 📘 [GET_STARTED.md](GET_STARTED.md) - 快速开始指南
- 📗 [USAGE_GUIDE.md](USAGE_GUIDE.md) - 详细使用说明
- 📙 [QUICKSTART.md](QUICKSTART.md) - 5分钟快速启动

### 🔧 开发文档
- 📕 [docs/API.md](docs/API.md) - API接口文档
- 📔 [docs/SETUP.md](docs/SETUP.md) - 安装配置指南
- 📓 [docs/FEATURES.md](docs/FEATURES.md) - 功能详细说明

### 🚀 部署文档
- 📒 [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) - 生产环境部署
- 🐳 [docker-compose.yml](docker-compose.yml) - Docker配置

### 📋 项目信息
- 📄 [README.md](README.md) - 项目说明
- 📊 [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - 项目总结
- ✅ [PROJECT_COMPLETE.md](PROJECT_COMPLETE.md) - 完成报告
- 📝 [docs/TODO.md](docs/TODO.md) - 开发计划

### 🤝 贡献指南
- 💡 [CONTRIBUTING.md](CONTRIBUTING.md) - 如何贡献
- 📜 [LICENSE](LICENSE) - MIT许可证

---

## 💡 使用技巧

### 🎯 提高翻译质量
- 输入完整的句子或段落
- 保持原文的标点符号
- 可以多次翻译选择最佳结果

### ✍️ 创作更好的诗词
- 主题要具体明确
- 选择合适的格式
- 可以设置情感基调

### 🔍 获得准确的查询
- 使用准确的关键词
- 选择正确的查询类型
- 可以尝试不同的关键词

### 💬 智能问答技巧
- 问题要清晰具体
- 可以分步骤提问
- 利用上下文继续深入

---

## ❓ 常见问题

<details>
<summary><b>Q: 提示"无法连接到后端服务"？</b></summary>

A: 
1. 确保后端服务已启动
2. 访问 http://localhost:8000/health 检查
3. 查看终端是否有错误信息
</details>

<details>
<summary><b>Q: API调用失败？</b></summary>

A: 
1. 检查 `.env` 文件中的API密钥是否正确
2. 确认API密钥有足够的额度
3. 检查网络连接
</details>

<details>
<summary><b>Q: 端口被占用？</b></summary>

A: 
1. 修改后端端口：编辑 `backend/.env` 中的 `PORT`
2. 修改前端端口：编辑 `frontend/vite.config.ts` 中的 `port`
</details>

<details>
<summary><b>Q: 依赖安装失败？</b></summary>

A: 
1. 确保Python 3.9+已安装：`python --version`
2. 确保Node.js 16+已安装：`node --version`
3. 尝试使用国内镜像源
</details>

---

## 🎓 学习资源

### 推荐阅读
- 📖 《论语》- 儒家经典
- 📖 《道德经》- 道家经典
- 📖 《唐诗三百首》- 诗歌精选
- 📖 《宋词三百首》- 词作精选

### 在线资源
- 🌐 古诗文网 - https://www.gushiwen.cn
- 🌐 国学网 - http://www.guoxue.com
- 🌐 中华古籍全录 - http://www.zggdwx.com

---

## 🌟 项目特色

### ✨ 技术特色
- 🤖 AI驱动，智能理解
- 🎨 现代化界面设计
- 📱 响应式布局
- 🔧 模块化架构
- 🐳 Docker容器化
- 📚 完整文档

### 🎯 功能特色
- 📖 准确的古文翻译
- ✍️ 符合格律的诗词创作
- 🎋 对仗工整的对联生成
- 🔍 详细的典故查询
- 📝 智能的断句功能
- 💬 专业的问答服务

---

## 🤝 参与贡献

欢迎参与项目开发！

### 贡献方式
- 🐛 报告Bug
- 💡 提出新功能建议
- 📝 改进文档
- 💻 提交代码
- 🌟 给项目Star

查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详情。

---

## 📞 获取帮助

遇到问题？

- 📖 查看文档：`docs/` 目录
- 🐛 提交Issue：GitHub Issues
- 💬 参与讨论：项目讨论区
- 📧 联系作者：通过GitHub

---

## 🎉 开始你的国学之旅

现在一切准备就绪！

1. ✅ 配置好API密钥
2. ✅ 启动应用
3. ✅ 打开浏览器访问 http://localhost:3000
4. ✅ 开始探索国学的魅力

---

<div align="center">

## 📚 传承中华文化，让国学学习更简单 📚

**祝你使用愉快！** ✨

如果觉得项目有帮助，请给个 ⭐ Star 支持一下！

---

Made with ❤️ for Chinese Culture

</div>
