const express = require('express')
const router = express.Router()

// 处理 GET 请求，获取用户列表
router.get('/', (req, res) => {
  res.send('user list')
})

// 处理 GET 请求，获取指定用户的详细信息
router.get('/:id', (req, res) => {
  res.send(`user Detail${req.params.id}`)
})

// 处理 POST 请求，校验用户登录并返回用户信息
router.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username === 'admin' && password === '123456') {
    const user = { id: 1, username, password, token: 'admin_token' }
    res.json({ code: 0, data: user })
  } else {
    res.status(401).json({ code: 1, message: 'Invalid username or password' })
  }
})

module.exports = router
