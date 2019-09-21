const user = [{
  id: '1',
  name: 'Ada',
  email: 'ada@gmail.com',
  address: 'avenida siempreviva 742',
  phone: '1234567890',
},
{
  id: '2',
  name: 'Lisa S',
  email: 'lisa@gmail.com',
  address: 'calle falsa 123',
  phone: '1234567890',
},
{
  id: '3',
  name: 'Papa Pig',
  email: 'pepa@gmail.com',
  address: 'calle falsa 123',
  phone: '1234568765'
}


]

const getUser = (req, res, next) => {
    console.log('pidiendo usuarios')
    res.json({user})
    next()
}

module.exports = {getUser}