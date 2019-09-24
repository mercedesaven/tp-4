const express = require('express') 

const path = require('path')


const user = require('../api/user')
const router = express.Router();



router.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname,'../pages/index.html'))
})

router.get('/index', (req, res)=>{
    res.sendFile(path.join(__dirname,'../pages/index.html'))
  })


  router.get('/api/user', user.getUser) 
  /* router.get('/api/user/:id', user.getSearchUser) */
  router.get('/api/user/:name', user.getSearchUser);
  /*router.post('/api/user', user.postUser); */


router.use((req, res)=>{
    res.status(404).send('pagina no encontrada')
  })

module.exports = router 