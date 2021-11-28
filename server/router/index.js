const express = require('express')
const router  = express.Router()
const Room    = require('./Room')

router
   .get('/room/:id', Room.get)
   .post('/room', Room.post)