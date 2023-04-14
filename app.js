const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./routes/user')

const app = express()

app.use(bodyParser.json())
app.use('/api/user', userRouter)

app.listen(3000, () => {
  console.log('Server listening on http://localhost:3000')
})
