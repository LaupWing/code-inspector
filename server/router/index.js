const express = require('express')
const router  = express.Router()
const Room    = require('./Room')

module.exports = router
   .get('/', (req, res)=>{
      res.send({
         success: true
      })
   })
   .get('/room/:id', Room.get)
   .post('/room', Room.post)

