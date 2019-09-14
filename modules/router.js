const express = require('express') 

const path = require('path')


const user = require('../api/user')
const router = express.Router();



router.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname,'../pages/index.html'))
  })


router.get('/api/user', (user) )


router.use((req, res)=>{
    res.status(404).send('pagina no encontrada')
  })

module.exports = router 