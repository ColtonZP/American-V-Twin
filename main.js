const arrow = document.querySelector('.arrow');
const book = document.querySelector('.book');

const i = 0
const images = ['img/spin1', 'img/spin2', 'img/spin3'];
const time = 3000;

arrow.addEventListener('click', (event) => {
  document.querySelector('.location').scrollIntoView({
    behavior: 'smooth'
  });
});