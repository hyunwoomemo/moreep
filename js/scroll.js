const content = document.querySelector('.content');
const header = document.querySelector('header');
const tagWrapper = document.querySelector('.tagWrapper');
const tagItem = document.querySelectorAll('.tagWrapper span');
const content2Wrapper = document.querySelector('.content2-wrapper');
const content2WrapperStart = content2Wrapper.getBoundingClientRect().top;

console.log(content2WrapperStart);

window.addEventListener('load', function(){
  content.classList.add('active');
})

let scrollValue = document.documentElement.scroll;

document.addEventListener('scroll', function(){
  scrollY > 500 ? header.classList.remove('active') : header.classList.add('active');
  const nav = document.querySelector('.nav');
  scrollY > 500 ? nav.classList.add('active') : nav.classList.remove('active');
  for ( let i = 0; i < tagItem.length; i++) {
    scrollY > content2WrapperStart ? tagItem[0].classList.add('active') : tagItem[0].classList.remove('active');
  }
})