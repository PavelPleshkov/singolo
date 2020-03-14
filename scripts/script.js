const mainMenu = document.querySelector('#mainMenu');
const messageBlock = document.querySelector('#form-message-block');
const btnSend = document.querySelector('#btnSend');
const btnCloseMessageBlock = document.querySelector('#message-btn-close');

mainMenu.addEventListener('click', (event) => {
  mainMenu.querySelectorAll('.header-navigation-item').forEach(elem => elem.classList.remove('active'));
  event.target.classList.add('active');
});

btnSend.addEventListener('click', () => messageBlock.classList.remove('hidden'));

btnCloseMessageBlock.addEventListener('click', () => messageBlock.classList.add('hidden'));