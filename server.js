const express = require('express')
const next = require('next')
const server = express()

const port = parseInt(process.env.PORT, 10) || 8500 // 设置监听端口
const dev = process.env.NODE_ENV !== 'production' // 判断当前开发环境
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
})
