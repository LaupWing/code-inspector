const express    = require('express')
const app        = express()
const http       = require('http')
const router     = require('./router')
const httpServer = http.createServer(app)
const port       = process.env.PORT || 5000
const cors       = require('cors')
const {Server}   = require('socket.io')
const State      = require('./State')
const state      = new State()

const io = new Server(httpServer)

io.on('connection', socket=>{
   state.addSocket(socket)
   console.log(state.sockets)
   // console.log(socket.id)
   // console.log(state.users)
})

app
   .use(cors())
   .use(router)

httpServer.listen(port)
