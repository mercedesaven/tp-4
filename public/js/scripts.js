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
<<<<<<< HEAD
=======


>>>>>>> 4c844adbf7503936a252b045ea56f1cd94a266ae

const printEmployeeList = (emp) => {
  console.log(user)
  let getEmployee = document.getElementById('container')
  getEmployee.innerHTML = '';
  user.forEach((e) => {
		getEmployee.innerHTML += employee(e);
	});
}    

//Función para que se creen cada uno de los ítems en pantalla?
const employee = (e) => `
    <ul class="employeeList" id="newEmployee"> 
    <li><input type="checkbox"></li>
    <li class="employeeName checkBtnColor" id="name" onclick="editElement()" > <p>${e.name}</p> </li>
    <li class="employeeEmail" id="email"> <p>${e.email}</p> </li>
    <li class="employeeAdress" id="adress"> <p>${e.address}</p> </li>
    <li class="employeePhone" id="phone"> <p>${e.phone}</p> </li>
    <li class="employeeActions" id="actions">
      <a class="deleteBtn" onclick="removeElement()"></a>
      
    </li>
    </ul>
  `

<<<<<<< HEAD

  //Comento ésta función porque creo que la que de abajo incluye ésto:
/*    const newEmployee = () => {
    user.unshift(user)
  } 
 */
=======
  const removeElement =  () => {
    const elementIndex = document.getElementById('newEmployee')
    alert("Seguro queres borrar?")
    elementIndex.remove()
}

const editElement = () => {
  let itemName = document.getElementById('name')
  let item1 = prompt("change something: ")
  itemName.innerHTML = item1
}








  
>>>>>>> 4c844adbf7503936a252b045ea56f1cd94a266ae

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

<<<<<<< HEAD

//ACTIONS BUTTONS: "EDITAR" / "ELIMINAR"
//MODAL "ADVERTENCIA ELIMINAR" 
//FILTRAR

=======
  const addNewEmployee = () => {
/*     let inputModal = document.getElementById('activeModal')
 */    let inputEmployeeName= document.getElementById('nameModal')
    let newEmployeeName = inputEmployeeName.value
    let inputEmployeeEmail= document.getElementById('emailModal')
    let newEmployeeEmail = inputEmployeeEmail.value
    user.unshift(
      {name: newEmployeeName,
      email: newEmployeeEmail })
   printEmployeeList()
  
   
 } 
>>>>>>> 4c844adbf7503936a252b045ea56f1cd94a266ae
