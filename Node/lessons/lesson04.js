// 使用 eventproxy 控制并发

const express = require('express')
const superagent = require('superagent')
const cheerio = require('cheerio')

const app = express()

const url = 'https://cnodejs.org'

app.get('/', (req, res, next) => {
  superagent.get(url).end((err, sres) => {
    if (err) return next(err)

    // sres.text 里面存储着网页的 html 内容
    let $ = cheerio.load(sres.text)
    let items = []
    $('#topic_list .topic_title').each((index, ele) => {
      console.log($(ele).children)
      items.push({
        title: $(ele).attr('title'),
        href: url + $(ele).attr('href'),
        author: $(ele).parents('.cell').find('img').attr('title')
      })
    })
    res.send(items)
  })
})

app.listen(3000, () => {
  console.log('app is listening at port 3000')
})