const user = [{
  name: 'Ada',
  email: 'ada@gmail.com',
  address: 'avenida siempreviva 742',
  phone: '1234567890',
},
{
  name: 'Lisa S',
  email: 'lisa@gmail.com',
  address: 'calle falsa 123',
  phone: '1234567890',
},
{
  name: 'Papa Pig',
  email: 'pepa@gmail.com',
  address: 'calle falsa 123',
  phone: '1234568765'
}
]

const printEmployeeList = (emp) => {
  console.log(user)
  let getEmployee = document.getElementById('newEmployee')
  getEmployee.innerHTML = '';
  user.forEach((e) => {
		getEmployee.innerHTML += employee(e);
	});
}    

//Función para que se creen cada uno de los ítems en pantalla?
const employee = (e) => `
    <li class="employeeName" id="name"> <p>${e.name}</p> </li>
    <li class="employeeEmail" id="email"> <p>${e.email}</p> </li>
    <li class="employeeAdress" id="adress"> <p>${e.adress}</p> </li>
    <li class="employeePhone" id="phone"> <p>${e.phone}</p> </li>
    <li class="employeeActions" id="actions">
      <a>${e.edit}</a>
      <a>${e.delet}</a>
    </li>
  `


  //Comento ésta función porque creo que la que de abajo incluye ésto:
/*    const newEmployee = () => {
    user.unshift(user)
  } 
 */

//AGREGAR INPUT DESDE EL MODAL

const addNewEmployee = () => {
  let input = document.getElementsByClassName('inputText')
  user = input.value

  if (input.value !== '') {
    input.value = ''
    user.unshift({
      text: user,
      printEmployeeList();
    })
    else {
    activeMessageAlert.classList.remove('messageAlert');
    activeMessageAlert.classList.add('activeMessageAlert');
    }
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


//ACTIONS BUTTONS: "EDITAR" / "ELIMINAR"
//MODAL "ADVERTENCIA ELIMINAR" 
//FILTRAR

