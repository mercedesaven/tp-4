let usersData
const initialize = async () => {
	usersData = await getUser()
	printEmployeeList(usersData)
	console.log(usersData)
}

const getUser = () => {
	return fetch('/api/user').then((res) => res.json()).then((result) => result.user)
}

let lastRequest
const handleSearch = () => {
	let name = event.target.value
	if (event.keyCode === 13 && name !== lastRequest) {
		lastRequest = name.toString().toLowerCase()
		let searchResults = document.getElementById('results')
		if (container.style.display === 'none') {
			container.style.display = 'block'
		} else {
			container.style.display = 'none'
			searchResults.style.display = 'block'
		}
		userSearch(lastRequest)
	}
}

const userSearch = (name) => {
	fetch(`/api/user/search/${name}`).then((res) => res.json()).then((r) => {
		console.log(r)

		let container = document.getElementById('results')
		r.forEach((e) => {
			container.innerHTML = employee(e)
		})
	})
}

const printEmployeeList = (emp) => {
	let getEmployee = document.getElementById('container')
	getEmployee.innerHTML = ''
	emp.forEach((e) => {
		getEmployee.innerHTML += employee(e)
	})
}

const seeAll = () => {
	let searchResults = document.getElementById('results')
	if (container.style.display === 'none') {
		container.style.display = 'block'
		searchResults.style.display = 'none'
	} else {
		container.style.display = 'none'
	}
	initialize()
}

// si es informacion tabulada debería verse en tablas
const employee = (e) => `
    <ul class="employeeList" id="newEmployee"> 
    <li class="employeeName" id="name"  > <p>${e.name}</p> </li>
    <li class="employeeEmail" id="email"> <p>${e.email}</p> </li>
    <li class="employeeAdress" id="address"> <p>${e.address}</p> </li>
    <li class="employeePhone" id="phone"> <p>${e.phone}</p> </li>
    <li class="employeeActions" id="actions">
      <a class="deleteBtn" onclick="removeElement(${e.id})" id="deleteElement"></a>
      <a class="checkBtnColor" onclick="editElement(${e.id})"></a>
      
    </li>
    </ul>
  `

//eliminar

var removeElement = (id) => {
	alert('¿Estás segurx de borrar este usuario?')
	let inputEmployeeName = document.getElementById('name')
	let inputEmployeeEmail = document.getElementById('email')
	let inputEmployeeAddress = document.getElementById('address')
	let inputEmployeePhone = document.getElementById('phone')
	// para qué usan el payload en el delete?
	const payload = {
		name: inputEmployeeName.value,
		email: inputEmployeeEmail.value,
		address: inputEmployeeAddress.value,
		phone: inputEmployeePhone.value
	}
	fetch(`/api/user/delete/${id}`, {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})
		.then((res) => res.json())
		.then((result) => {
			initialize()
		})
}

// editar
const editElement = (id) => {
	// la edición cambia todos los valores del usuario a 0 por alguna razón.
	let inputEmployeeName = document.getElementById('name')
	let inputEmployeeEmail = document.getElementById('email')
	let inputEmployeeAddress = document.getElementById('address')
	let inputEmployeePhone = document.getElementById('phone')
	let newEmployeeName = inputEmployeeName.value
	let newEmployeeEmail = inputEmployeeEmail.value
	let newEmployeeAddress = inputEmployeeAddress.value
	let newEmployeePhone = inputEmployeePhone.value

	const payload = {
		name: newEmployeeName,
		email: newEmployeeEmail,
		address: newEmployeeAddress,
		phone: newEmployeePhone
	}
	fetch(`api/user/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})
		.then((res) => res.json())
		.then((result) => {
			modal(payload)

			initialize()
		})
}

//Modal

const modal = () => {
	let activeModal = document.getElementById('activeModal')
	activeModal.classList.remove('modal')
	activeModal.classList.add('activeModal')
}

const closeModal = () => {
	let closeModal = document.getElementById('activeModal')
	closeModal.classList.remove('activeModal')
	closeModal.classList.add('modal')
}

// validacion
// las validaciones no estarían ocurriendo
const validation = (e) => {
	if (e.length > 3) {
		return true
	} else {
		return false
	}
}

let validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const emailValid = (e) => {
	validEmail.test(e)
}

const numberValid = (num) => {
	let validNumber = /^([0-9])*$/
	return validNumber.test(num)
}

// nuevo empleado

const addNewEmployee = () => {
	event.preventDefault()
	//la captura de valores como estos está repetida en varios lugares, se podria extraer en una función
	let inputEmployeeName = document.getElementById('nameModal')
	let inputEmployeeEmail = document.getElementById('emailModal')
	let inputEmployeeAddress = document.getElementById('addressModal')
	let inputEmployeePhone = document.getElementById('phoneModal')

	let newEmployeeName = inputEmployeeName.value
	let newEmployeeEmail = inputEmployeeEmail.value
	let newEmployeeAddress = inputEmployeeAddress.value
	let newEmployeePhone = inputEmployeePhone.value

	// guarda con el codigo comentado
	/*  if (validation(newEmployeeName) && validation(newEmployeeAddress) && numberValid(newEmployeePhone) && validateEmail(newEmployeeEmail)) 
      {
 */

	const payload = {
		name: newEmployeeName.toString().toLowerCase(),
		email: newEmployeeEmail,
		address: newEmployeeAddress,
		phone: newEmployeePhone
	}
	fetch(`api/user`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(payload)
	})
		.then((res) => res.json())
		.then((result) => {
			inputEmployeeName.value = ''
			inputEmployeeEmail.value = ''
			inputEmployeeAddress.value = ''
			inputEmployeePhone.value = ''

			closeModal()
			initialize()
		})
	/* }  else {
    alert('Campos incompletos')
  }  */
}
