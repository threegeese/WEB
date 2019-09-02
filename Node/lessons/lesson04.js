// 使用 eventproxy 控制并发

const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')

const app = express()

const url = 'https://cnodejs.org'



app.listen(3000, () => {
  console.log('app is listening at port 3000')
})