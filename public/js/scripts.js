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



const printEmployeeList = (emp) => {
  console.log(user)
  let getEmployee = document.getElementById('container')
  getEmployee.innerHTML = '';
  user.forEach((e) => {
		getEmployee.innerHTML += employee(e);
	});
}    

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
  
  const addNewEmployee = () => {
    /*     let inputModal = document.getElementById('activeModal')
 */    let inputEmployeeName= document.getElementById('nameModal')
 let newEmployeeName = inputEmployeeName.value
    let inputEmployeeEmail= document.getElementById('emailModal')
    let newEmployeeEmail = inputEmployeeEmail.value
    let inputEmployeeAddress= document.getElementById('addressModal')
    let newEmployeeAddress = inputEmployeeAddress.value
    let inputEmployeePhone= document.getElementById('phoneModal')
    let newEmployeePhone = inputEmployeePhone.value
    if (newEmployeeName === '' || newEmployeeEmail === ''){
      alert("Completa todos los datos")
    }else {
      user.unshift(
        {id: Math.random().toString().substr(2.9),  //https://gist.github.com/gordonbrander/2230317
          name: newEmployeeName,
          email: newEmployeeEmail,
          address: newEmployeeAddress,
          phone: newEmployeePhone })
        closeModal()
        printEmployeeList()
      }  
 } 