const user = [{
    nombre: 'Ada',
    apellido: 'Lovelace',
    telefono: '1234567890',
    email: 'contacto@gmail.com'
  },
   {
    nombre: 'Grace',
    apellido: 'Hopper',
    telefono: '087654321',
    email: 'contacto@hotmail.com'
  },
  {
    nombre: 'pepita',
    apellido: 'la pistolera',
    telefono: '233389211',
    email: 'contacto@hotmail.com'
  }


]

const middleWare = (req, res, next) => {
    console.log('pidiendo usuarios')
    res.json({user})
    next()
}

module.exports = middleWare