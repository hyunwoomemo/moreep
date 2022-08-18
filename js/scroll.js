const content = document.querySelector('.content');
const header = document.querySelector('header');
const tagWrapper = document.querySelector('.tagWrapper');
const tagItem = document.querySelectorAll('.tagWrapper span');
const content2Wrapper = document.querySelector('.content2-wrapper');
const content2WrapperStart = content2Wrapper.getBoundingClientRect().top;
const nav = document.querySelector('.nav');
const navTitle = nav.querySelector('a');

console.log(content2WrapperStart);

window.addEventListener('load', function(){
  content.classList.add('active');
})

let scrollValue = document.documentElement.scroll;

document.addEventListener('scroll', function(){
  scrollY > 500 ? header.classList.remove('active') : header.classList.add('active');
  scrollY > 500 ? nav.classList.add('active') : nav.classList.remove('active');
  scrollY > content2WrapperStart ? nav.classList.add('change') : nav.classList.remove('change');
  if ( scrollY >= content2WrapperStart) {
    nav.classList.add('change');
    tagWrapper.classList.add('active');
    navTitle.classList.add('hidden');
  }
  else {
    nav.classList.remove('change');
    tagWrapper.classList.remove('active');
    navTitle.classList.remove('hidden');
  }
})