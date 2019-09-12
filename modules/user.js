const user = [{
  name: 'Ada',
  email: 'ada@gmail.com',
  adress: 'avenida siempreviva 742',
  phone: '1234567890',
},
{
  name: 'Lisa S',
  email: 'lisa@gmail.com',
  adress: 'calle falsa 123',
  phone: '1234567890',
},
{
  name: 'Papa Pig',
  email: 'pepa@gmail.com',
  adress: 'calle falsa 123',
  phone: '1234568765'
}


]

const middleWare = (req, res, next) => {
    console.log('pidiendo usuarios')
    res.json({user})
    next()
}

module.exports = middleWare