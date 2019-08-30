// 一个简单的 express 应用

const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log('app is listening at port 3000')
})
