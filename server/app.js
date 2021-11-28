const express = require('express')
const app     = express()
const http    = require('http')
const router  = require('./router')
const server  = http.createServer(app)
const port    = process.env.PORT || 5000
const cors    = require('cors')

app
   .use(cors())
   .use(router)

server.listen(port)
