# API 文档

## 基础信息

- 基础URL: `http://localhost:8000/api`
- 所有请求和响应均为JSON格式

## 接口列表

### 1. 古文翻译

**接口**: `POST /translation/`

**请求参数**:
```json
{
  "text": "学而时习之，不亦说乎",
  "add_annotation": false
}
```

**响应**:
```json
{
  "original": "学而时习之，不亦说乎",
  "translation": "学习知识并且按时温习，不也是很愉快的事吗？",
  "annotation": null
}
```

### 2. 诗词创作

**接口**: `POST /poetry/`

**请求参数**:
```json
{
  "theme": "春天",
  "style": "七言绝句",
  "mood": "欢快"
}
```

**响应**:
```json
{
  "title": "《春天》",
  "content": "春风拂柳绿如烟...",
  "style": "七言绝句",
  "explanation": null
}
```

### 3. 典故查询

**接口**: `POST /query/`

**请求参数**:
```json
{
  "keyword": "卧薪尝胆",
  "query_type": "allusion"
}
```

**响应**:
```json
{
  "keyword": "卧薪尝胆",
  "results": [
    {
      "content": "详细解释..."
    }
  ]
}
```

### 4. 智能断句

**接口**: `POST /punctuation/`

**请求参数**:
```json
{
  "text": "子曰学而时习之不亦说乎"
}
```

**响应**:
```json
{
  "original": "子曰学而时习之不亦说乎",
  "punctuated": "子曰：学而时习之，不亦说乎？"
}
```
