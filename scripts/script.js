const mainMenu = document.querySelector('#mainMenu');
const mainSections = [];
document.querySelectorAll('#main>section').forEach((section) => {
  if (section.getAttribute('id') != null) {
    mainSections.push(section);
  }
});
// console.log(mainSections);
document.querySelector('.header-navigation-item:first-child').addEventListener('click', () => {
  // window.scrollTo(0, 96);
  // document.scrollY(0);
  // window.scrollY = '96px';
  // console.log(document.querySelector('#slider').offsetTop);
})


const messageBlock = document.querySelector('#form-message-block');
const btnSend = document.querySelector('#btnSend');
const btnCloseMessageBlock = document.querySelector('#message-btn-close');

document.addEventListener('scroll', onScroll);

function onScroll(event) {
  // console.log(event);
  const curPos = window.scrollY;

  // console.log(curPos);
  // console.log(document.querySelectorAll('#mainMenu>a'));
  // document.querySelectorAll('#main>section')
  mainSections.forEach((elem) => {
    // if (elem.getAttribute('id') != null) {
      // pageItems.push(elem);
      // console.log(elem);
      // console.log(elem.offsetTop);
      console.log(elem.getAttribute('id'));
      // console.log(pageItems);
      if (elem.offsetTop <= curPos && (elem.offsetTop + elem.offsetHight) > curPos) {
        mainMenu.querySelectorAll('.header-navigation-item').forEach(a => a.classList.remove('active'));
        if (elem.getAttribute('id') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      }
    // }
    
    
    // elem.getAttribute('id');
  });
  
}

mainMenu.addEventListener('click', (event) => {
  mainMenu.querySelectorAll('.header-navigation-item').forEach(elem => elem.classList.remove('active'));
  event.target.classList.add('active');
});

btnSend.addEventListener('click', () => messageBlock.classList.remove('hidden'));

btnCloseMessageBlock.addEventListener('click', () => messageBlock.classList.add('hidden'));