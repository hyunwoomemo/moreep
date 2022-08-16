const content = document.querySelector('.content');
const header = document.querySelector('header');

window.addEventListener('load', function(){
  content.classList.add('active');
})

let scrollValue = document.documentElement.scroll;

document.addEventListener('scroll', function(){
  scrollY > 5 ? header.classList.remove('active') : header.classList.add('active');
  const nav = document.querySelector('.nav');
  scrollY > 5 ? nav.classList.add('active') : nav.classList.remove('active');
})