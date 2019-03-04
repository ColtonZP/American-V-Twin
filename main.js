
const arrow = document.querySelector('.arrow');
const services = document.querySelector('.services');

let infoShowing = null;

arrow.addEventListener('click', () => {
  document.querySelector('.location').scrollIntoView({
    behavior: 'smooth',
  });
});

function removeInfo() {
  if (infoShowing !== null) {
    infoShowing.classList.remove('showInfo');
  }
  infoShowing = null;
}

function showInfo(info) {
  info.classList.add('showInfo');
  infoShowing = info;
}

services.addEventListener('click', (event) => {
  const clickedBox = event.target.parentNode.querySelector(`.serviceInfo${event.target.className.slice(-1)}`);

  if (clickedBox === infoShowing) {
    removeInfo();
  } else {
    removeInfo();
    setTimeout(() => {
      showInfo(clickedBox);
    }, 600);
  }
});
