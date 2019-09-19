let usersData;
const initialize = async () => {
	usersData = await getUser();
	printEmployeeList(usersData.user);
};

const getUser = () => {
  return fetch('/api/user').then((res) => res.json()); 
}  

const printEmployeeList = (emp) => {
  /* console.log(user) */
  let getEmployee = document.getElementById('container')
  getEmployee.innerHTML = '';
  emp.forEach((e) => {
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
  
  const addNewEmployee = (empleado) => {
    let inputEmployeeName= document.getElementById('nameModal')
    let newEmployeeName = inputEmployeeName.value
    newEmployeeName.innerHTML = ""
    let inputEmployeeEmail= document.getElementById('emailModal')
    let newEmployeeEmail = inputEmployeeEmail.value
    newEmployeeEmail.innerHTML= ''
    let inputEmployeeAddress= document.getElementById('addressModal')
    let newEmployeeAddress = inputEmployeeAddress.value
    newEmployeeAddress.innerHTML= ''
    let inputEmployeePhone= document.getElementById('phoneModal')
    let newEmployeePhone = inputEmployeePhone.value
    newEmployeePhone.innerHTML= ''
    if (newEmployeeName === '' || newEmployeeEmail === ''){
      alert("Completa todos los datos")
    } else {
       empleado.unshift(
        {id: Math.random().toString().slice(2,9),  //https://gist.github.com/gordonbrander/2230317
          name: newEmployeeName,
          email: newEmployeeEmail,
          address: newEmployeeAddress,
          phone: newEmployeePhone })
          closeModal()
          printEmployeeList()
      } 
 } 