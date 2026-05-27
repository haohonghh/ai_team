# AI Team Login - Backend

## 技术栈

- Node.js 20+
- Express 4.18
- CORS

## API 接口

### POST /api/login

**请求参数：**
```json
{
  "username": "admin",
  "password": "123456"
}
```

**成功响应：**
```json
{
  "success": true,
  "message": "欢迎回来，管理员"
}
```

**失败响应：**
```json
{
  "success": false,
  "message": "用户名或密码错误"
}
```

## 启动

```bash
cd server
npm install
npm start
```

服务启动于 http://localhost:3000