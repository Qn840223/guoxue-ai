# 贡献指南

感谢你对国学AI助手项目的关注！我们欢迎各种形式的贡献。

## 如何贡献

### 报告问题

如果你发现了 bug 或有功能建议：

1. 在 GitHub Issues 中搜索是否已有相关问题
2. 如果没有，创建新的 Issue
3. 清晰描述问题或建议
4. 如果是 bug，请提供复现步骤

### 提交代码

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

### 代码规范

#### Python 代码

- 遵循 PEP 8 规范
- 使用类型注解
- 编写文档字符串
- 添加单元测试

```python
def translate_text(text: str, add_annotation: bool = False) -> dict:
    """
    翻译古文
    
    Args:
        text: 待翻译的古文
        add_annotation: 是否添加注释
        
    Returns:
        包含翻译结果的字典
    """
    pass
```

#### TypeScript/React 代码

- 使用 TypeScript
- 遵循 ESLint 规则
- 使用函数式组件和 Hooks
- 添加适当的注释

```typescript
interface TranslationProps {
  text: string
  onTranslate: (result: string) => void
}

const Translation: React.FC<TranslationProps> = ({ text, onTranslate }) => {
  // 组件逻辑
}
```

### 提交信息规范

使用语义化的提交信息：

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建/工具相关

示例：
```
feat: 添加对联生成功能
fix: 修复古文翻译中的标点问题
docs: 更新 API 文档
```

## 开发流程

1. 克隆仓库并安装依赖
2. 创建 `.env` 文件配置环境变量
3. 运行测试确保一切正常
4. 开发新功能或修复 bug
5. 编写测试
6. 提交 Pull Request

## 需要帮助的领域

- 🌐 国际化支持
- 📚 扩充国学知识库
- 🎨 UI/UX 改进
- 📝 文档完善
- 🧪 测试覆盖
- 🚀 性能优化

## 行为准则

- 尊重所有贡献者
- 保持友好和专业
- 接受建设性批评
- 关注项目目标

## 联系方式

如有问题，可以通过以下方式联系：

- GitHub Issues
- 项目讨论区

再次感谢你的贡献！
