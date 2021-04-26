const circleBlock = document.querySelector('.circle-block');
const smallCircle = document.querySelector('.title-circle')
const bigCircle = document.querySelector('.circle');
const title = document.querySelector('.title');
const body = document.querySelector('body');
const header = document.querySelector('#header');
const rows = document.querySelectorAll('.row');
const arrow = document.querySelector('.arrow');
const span = document.querySelector('.title span');
const titleContent = document.querySelector('.title .title-content');
const main = document.querySelector('.main-block')

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  const isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
  return isVisible;
}

let lastScrollTop = 0;
window.addEventListener('scroll', function (e) {
  let scroll = window.pageYOffset;
  if (lastScrollTop > scroll && !isScrolledIntoView(main)) {
    span.style.transform = `translate(0%, 0%)`;
    titleContent.style.transform = `translate(0%, 0%)`;
    arrow.style.transform = `translate(0%, 0%)`;
    bigCircle.style.transform = 'scale(1)'
    smallCircle.style.transform = 'translate(-50%, -50%)'
    title.style.opacity = '1'
    circleBlock.style.opacity = '1'
    console.log('top', `${lastScrollTop} > ${scroll}`);
  } else if (lastScrollTop < scroll) {
    span.style.transform = `translate(0%, -${1250 + scroll / 100}%)`;
    titleContent.style.transform = `translate(0%, -${250 + scroll / 100}%)`;
    arrow.style.transform = `translate(0%, ${250 + scroll / 100}%)`;
    body.style.overflowX = 'hidden';
    bigCircle.style.transform = (`scale(${(250 + scroll / 100) / 100})`);
    smallCircle.style.transform = `translate(-50%, -50%) scale(${(250 + scroll / 100) / 100})`
    title.style.opacity = `${500 - scroll}`;
    circleBlock.style.opacity = `${500 - scroll}`;
    console.log('down', `${lastScrollTop} < ${scroll}`);
  }
  lastScrollTop = scroll;
});

let media_query = 'screen and (max-width:720px)';
let matched = window.matchMedia(media_query).matches;

if (matched) {
  rows[1].classList.add('reverse');
} else {
  rows[1].classList.remove('reverse');
}

AOS.init();