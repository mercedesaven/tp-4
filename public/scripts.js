

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

    