const content = document.querySelector('.content');
const header = document.querySelector('header');

window.addEventListener('load', function(){
  content.classList.add('active');
})

let scrollValue = document.documentElement.scroll;

document.addEventListener('scroll', function(){
  scrollY > 420 ? header.classList.remove('active') : header.classList.add('active');
})