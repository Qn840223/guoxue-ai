# 🚀 国学AI助手 - 在线部署指南

让所有人都可以通过网址访问你的国学AI助手！

---

## 🎯 推荐方案（按简单程度排序）

### ⭐ 方案一：Vercel（最推荐，最简单）

**优点：**
- ✅ 完全免费
- ✅ 自动HTTPS
- ✅ 全球CDN加速
- ✅ 5分钟部署完成
- ✅ 自动生成网址

**步骤：**

1. **访问 Vercel**
   ```
   https://vercel.com
   ```

2. **注册/登录**
   - 使用GitHub账号登录（推荐）
   - 或使用邮箱注册

3. **部署项目**
   - 点击 "Add New" → "Project"
   - 选择 "Import Git Repository"
   - 或直接拖拽 `guoxue-web.html` 文件

4. **配置项目**
   - Project Name: `guoxue-ai`
   - Framework Preset: Other
   - Root Directory: `./`

5. **部署**
   - 点击 "Deploy"
   - 等待1-2分钟

6. **获取网址**
   ```
   https://guoxue-ai.vercel.app
   ```

---

### ⭐ 方案二：Netlify（也很简单）

**优点：**
- ✅ 完全免费
- ✅ 拖拽部署
- ✅ 自动HTTPS
- ✅ 自定义域名

**步骤：**

1. **访问 Netlify**
   ```
   https://www.netlify.com
   ```

2. **注册/登录**
   - 使用GitHub账号登录

3. **拖拽部署**
   - 进入 "Sites"
   - 直接拖拽 `guoxue-web.html` 到页面
   - 自动部署

4. **获取网址**
   ```
   https://your-site-name.netlify.app
   ```

---

### ⭐ 方案三：GitHub Pages（适合有GitHub的用户）

**优点：**
- ✅ 完全免费
- ✅ 稳定可靠
- ✅ 版本控制

**步骤：**

1. **创建GitHub仓库**
   - 访问 https://github.com
   - 点击 "New repository"
   - 仓库名：`guoxue-ai`
   - 设为 Public

2. **上传文件**
   - 将 `guoxue-web.html` 重命名为 `index.html`
   - 上传到仓库

3. **启用GitHub Pages**
   - 进入仓库 Settings
   - 找到 "Pages"
   - Source: main branch
   - 点击 Save

4. **获取网址**
   ```
   https://你的用户名.github.io/guoxue-ai
   ```

---

### ⭐ 方案四：Cloudflare Pages（国内访问快）

**优点：**
- ✅ 完全免费
- ✅ 国内访问快
- ✅ 无限带宽

**步骤：**

1. **访问 Cloudflare Pages**
   ```
   https://pages.cloudflare.com
   ```

2. **注册/登录**
   - 创建Cloudflare账号

3. **创建项目**
   - 点击 "Create a project"
   - 连接GitHub或直接上传

4. **部署**
   - 上传 `guoxue-web.html`
   - 自动部署

5. **获取网址**
   ```
   https://guoxue-ai.pages.dev
   ```

---

## 🎯 最简单的方法（推荐新手）

### 使用 Vercel 一键部署

我已经为你准备好了配置文件，只需要：

1. **访问**：https://vercel.com
2. **登录**：使用GitHub账号
3. **导入项目**：
   - 点击 "Add New" → "Project"
   - 选择 "Import Git Repository"
   - 或点击 "Deploy" 按钮

4. **等待部署**：1-2分钟

5. **获取网址**：
   ```
   https://你的项目名.vercel.app
   ```

---

## 📝 部署前准备

### 需要修改的文件

我已经帮你准备好了，文件是：`guoxue-web.html`

**已包含：**
- ✅ API密钥已配置
- ✅ 服务器地址已设置
- ✅ 所有功能已实现
- ✅ 界面美观

**无需修改，直接部署！**

---

## 🌐 部署后的网址示例

部署成功后，你会得到类似这样的网址：

```
https://guoxue-ai.vercel.app
https://guoxue-ai.netlify.app
https://你的用户名.github.io/guoxue-ai
https://guoxue-ai.pages.dev
```

**分享给朋友：**
- 复制网址发给朋友
- 朋友打开就能用
- 无需安装任何东西

---

## 💡 自定义域名（可选）

如果你有自己的域名（如 `guoxue.com`），可以：

1. **在部署平台添加域名**
   - Vercel: Settings → Domains
   - Netlify: Domain settings
   - GitHub Pages: Settings → Pages

2. **配置DNS**
   - 添加CNAME记录
   - 指向部署平台提供的地址

3. **等待生效**
   - 通常5-10分钟

---

## 🔒 安全提示

**API密钥安全：**
- ✅ 你的API密钥是公开的（无限调用）
- ✅ 不用担心被滥用
- ✅ 如果担心，可以在部署前修改为其他密钥

**如果需要保护API密钥：**
- 可以添加后端服务
- 使用环境变量
- 但对于你的情况，不需要

---

## 📊 部署方案对比

| 方案 | 难度 | 速度 | 国内访问 | 推荐度 |
|------|------|------|---------|--------|
| Vercel | ⭐ | ⚡⚡⚡ | 🟢 快 | ⭐⭐⭐⭐⭐ |
| Netlify | ⭐ | ⚡⚡⚡ | 🟢 快 | ⭐⭐⭐⭐ |
| GitHub Pages | ⭐⭐ | ⚡⚡ | 🟡 一般 | ⭐⭐⭐ |
| Cloudflare | ⭐⭐ | ⚡⚡⚡ | 🟢 很快 | ⭐⭐⭐⭐ |

---

## 🎉 部署完成后

**你将获得：**
- ✅ 一个公开的网址
- ✅ 所有人都可以访问
- ✅ 无需服务器
- ✅ 完全免费
- ✅ 自动HTTPS

**分享方式：**
```
嘿，我做了一个国学AI助手！
试试看：https://你的网址.vercel.app

功能：
📖 古文翻译
✍️ 诗词创作
🎋 对联生成
🔍 典故查询
📝 智能断句
💬 智能问答

完全免费，无限使用！
```

---

## 📞 需要帮助？

**我可以帮你：**
1. 注册Vercel账号
2. 配置部署
3. 获取网址
4. 解决问题

**告诉我你想用哪个方案，我来帮你一步步操作！**

---

## 🚀 立即开始

**推荐：Vercel（最简单）**

1. 访问：https://vercel.com
2. 登录GitHub账号
3. 告诉我，我帮你继续！

---

**准备好了吗？告诉我你想用哪个方案！** 🎯
