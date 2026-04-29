# 部署指南

## 生产环境部署

### 后端部署

#### 使用 Docker

1. 创建 Dockerfile：

```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
```

2. 构建和运行：

```bash
docker build -t guoxue-backend .
docker run -d -p 8000:8000 --env-file .env guoxue-backend
```

#### 使用 Gunicorn

```bash
pip install gunicorn
gunicorn app.main:app -w 4 -k uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

### 前端部署

#### 构建生产版本

```bash
cd frontend
npm run build
```

#### 使用 Nginx

nginx.conf 配置：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /path/to/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    location /api {
        proxy_pass http://localhost:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

## 云平台部署

### Vercel (前端)

1. 连接 GitHub 仓库
2. 设置构建命令：`cd frontend && npm run build`
3. 设置输出目录：`frontend/dist`

### Railway (后端)

1. 连接 GitHub 仓库
2. 添加环境变量
3. 自动部署

### 阿里云/腾讯云

使用云服务器部署：

1. 购买云服务器
2. 安装 Docker
3. 部署应用
4. 配置域名和SSL证书

## 性能优化

### 后端优化

- 使用 Redis 缓存常见查询
- 启用 API 限流
- 使用 CDN 加速静态资源

### 前端优化

- 代码分割和懒加载
- 图片压缩和优化
- 启用 Gzip 压缩

## 监控和日志

### 日志配置

```python
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)
```

### 监控工具

- Sentry：错误追踪
- Prometheus：性能监控
- Grafana：数据可视化

## 安全建议

1. 使用 HTTPS
2. 设置 API 密钥保护
3. 启用 CORS 白名单
4. 定期更新依赖
5. 备份数据库
