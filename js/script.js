const circleBlock = document.querySelector('.circle-block');
const smallCircle = document.querySelector('.title-circle')
const bigCircle = document.querySelector('.circle');
const title = document.querySelector('.title');
const body = document.querySelector('body');
const header = document.querySelector('#header');
const rows = document.querySelectorAll('.row')

window.onscroll = magic;

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}

function magic(){
  if (isScrolledIntoView(header)) {
    body.style.overflowX = 'hidden'
    bigCircle.style.transform = 'scale(3.5)'
    smallCircle.style.transform = 'translate(-50%, -50%) scale(2)'
    title.style.opacity = '0'
    circleBlock.style.opacity = '0'
  } else {
    bigCircle.style.transform = 'scale(1)'
    smallCircle.style.transform = 'translate(-50%, -50%)'
    title.style.opacity = '1'
    circleBlock.style.opacity = '1'
  }
}

function checkMediaQuery() {
  if (window.innerWidth < 720) {
    rows[1].classList.add('reverse');
  } else {
    rows[1].classList.remove('reverse');
  }
}

// Add a listener for when the window resizes
window.addEventListener('resize', checkMediaQuery);

AOS.init();