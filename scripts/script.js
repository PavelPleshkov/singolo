//add scrolling to sections by pressing menu items
const mainMenu = document.querySelector('#mainMenu');
const mainSections = [];

document.querySelectorAll('#main>section').forEach((section) => {
  if (section.getAttribute('id') != null) {
    mainSections.push(section);
  }
});
document.addEventListener('scroll', onScroll);

function onScroll(event) {
  // console.log(event);
  const curPos = window.scrollY + document.querySelector('#header').offsetHeight + 1;

  mainSections.forEach((elem) => {
    // console.log(elem.getAttribute('id') + ':\n', 'top of section ' + elem.offsetTop + '\n', 'height of section '+ elem.offsetHeight + ' = ', elem.offsetTop + elem.offsetHeight + '');
    // console.log(pageYOffset, elem.offsetTop);
    // console.log(elem.offsetTop);
    if (elem.offsetTop <= curPos && (elem.offsetTop + elem.offsetHeight) > curPos) {
      mainMenu.querySelectorAll('.header-navigation-item').forEach(a => {a.classList.remove('active')
      if (elem.getAttribute('id') === a.getAttribute('href').substring(1)) {
        a.classList.add('active');
        // console.log(pageYOffset, elem.offsetTop);
      }});
    }
  });
}

mainMenu.addEventListener('click', (event) => {
  mainMenu.querySelectorAll('.header-navigation-item').forEach(elem => {
    elem.classList.remove('active');
  });
  event.target.classList.add('active');
  event.preventDefault();
  window.scrollTo(0, document.getElementById(`${event.target.getAttribute('href').substring(1)}`).offsetTop - document.querySelector('#header').offsetHeight);
});



//add popup to form
const messageBlock = document.querySelector('#form-message-block');
const btnSend = document.querySelector('#btnSend');
const btnCloseMessageBlock = document.querySelector('#message-btn-close');

btnSend.addEventListener('click', () => messageBlock.classList.remove('hidden'));
btnCloseMessageBlock.addEventListener('click', () => messageBlock.classList.add('hidden'));
messageBlock.addEventListener('click', (event) => {
  const message = document.querySelector('#message');
  if (event.clientX < message.getBoundingClientRect().x || event.clientX > message.getBoundingClientRect().x + message.getBoundingClientRect().width || event.clientY < message.getBoundingClientRect().y || event.clientY > message.getBoundingClientRect().y + message.getBoundingClientRect().height) {
    messageBlock.classList.add('hidden');
  }
})