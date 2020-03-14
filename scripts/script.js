const mainMenu = document.querySelector('#mainMenu');

mainMenu.addEventListener('click', (event) => {
  mainMenu.querySelectorAll('.header-navigation-item').forEach(elem => elem.classList.remove('active'));
  event.target.classList.add('active');
});
