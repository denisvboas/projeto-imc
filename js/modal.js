export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open: function() {
        Modal.wrapper.classList.add('open');
    },
    close: function() { 
        Modal.wrapper.classList.remove('open');
    }
}

Modal.buttonClose.onclick = function() {
    Modal.close() // remove a classe 'open' do modalWrapper para fechar o modal
}

window.addEventListener('keydown', handKeyDown)

function handKeyDown(event){
    console.log(event.key)
    if(event.key === 'Escape'){
        Modal.close()
    }
}