const express = require('express')
const server = express()
const router = require('./modules/router')
const port = 3000

server.use(express.static('public'))
server.use(router)

server.listen(port, () =>{
    console.log(`running ${port}`)
})