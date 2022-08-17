const content = document.querySelector('.content');
const header = document.querySelector('header');
const tagWrapper = document.querySelector('.tagWrapper');
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
  scrollY > content2WrapperStart ? tagWrapper.classList.add('active') : tagWrapper.classList.remove('active');
})