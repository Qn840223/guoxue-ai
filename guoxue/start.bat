@echo off
echo ========================================
echo 国学AI助手启动脚本
echo ========================================
echo.

echo 正在检查环境...
echo.

REM 检查Python
python --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到Python，请先安装Python 3.9+
    pause
    exit /b 1
)

REM 检查Node.js
node --version >nul 2>&1
if errorlevel 1 (
    echo [错误] 未找到Node.js，请先安装Node.js 16+
    pause
    exit /b 1
)

echo [成功] 环境检查通过
echo.

REM 检查后端依赖
if not exist "backend\venv" (
    echo 首次运行，正在创建虚拟环境...
    cd backend
    python -m venv venv
    call venv\Scripts\activate
    pip install -r requirements.txt
    cd ..
)

REM 检查前端依赖
if not exist "frontend\node_modules" (
    echo 首次运行，正在安装前端依赖...
    cd frontend
    call npm install
    cd ..
)

REM 检查.env文件
if not exist "backend\.env" (
    echo [警告] 未找到.env文件，正在创建...
    copy backend\.env.example backend\.env
    echo 请编辑 backend\.env 文件，填入你的API密钥
    pause
)

echo.
echo ========================================
echo 启动服务
echo ========================================
echo.

echo 启动后端服务...
start "国学AI助手-后端" cmd /k "cd backend && venv\Scripts\activate && python -m uvicorn app.main:app --reload"

timeout /t 3 /nobreak >nul

echo 启动前端服务...
start "国学AI助手-前端" cmd /k "cd frontend && npm run dev"

echo.
echo ========================================
echo 服务已启动！
echo ========================================
echo 后端API: http://localhost:8000
echo API文档: http://localhost:8000/docs
echo 前端界面: http://localhost:3000
echo ========================================
echo.
echo 按任意键关闭此窗口...
pause >nul
