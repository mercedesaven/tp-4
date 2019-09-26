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
    res.status(200).json({user})
    next()
}

const getSearchUser= (req, res, next) => {
  let searchUser = user.find(e => e.name === req.params.name)
  if (searchUser) {
		res.status(200).json(searchUser);
	}  else {
		res.status(404).send('no encontramos al usuario');
	} 
};


const postUser = (req, res, next) => {
	let data = req.body;
	if (data.hasOwnProperty('name') && data.hasOwnProperty('email') && data.hasOwnProperty('address') && data.hasOwnProperty('phone')) {
    data.id = Math.random().toString().slice(2,9)
    user.push(data)
		res.status('201').json(`recibido con el id ${data.id}`);
	} else {
		res.status('400').json(alert('Todos los campos deben estar completos'));
	}
	next();
};


module.exports = {getUser, getSearchUser, postUser}