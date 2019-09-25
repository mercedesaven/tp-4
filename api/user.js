const user = [{
  id: '1',
  name: 'ada',
  email: 'ada@gmail.com',
  address: 'avenida siempreviva 742',
  phone: '1234567890',
},
{
  id: '2',
  name: 'lisa s',
  email: 'lisa@gmail.com',
  address: 'calle falsa 123',
  phone: '1234567890',
},
{
  id: '3',
  name: 'pepa pig',
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

const getSearchUser= (req, res, next) => {
  let searchUser = user.find(e => e.name === req.params.name)
  if (searchUser) {
		res.json(searchUser);
	}  else {
		res.status(404).send('no encontramos al usuario');
	} 
};



module.exports = {getUser, getSearchUser}