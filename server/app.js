const express    = require('express')
const app        = express()
const http       = require('http')
const router     = require('./router')
const httpServer = http.createServer(app)
const port       = process.env.PORT || 5000
const cors       = require('cors')
const {Server}   = require('socket.io')

const io = new Server(httpServer)

io.on('connection', socket=>{
   console.log(socket.id)
})

app
   .use(cors())
   .use(router)

httpServer.listen(port)
