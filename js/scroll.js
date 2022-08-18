const content = document.querySelector('.content');
const header = document.querySelector('header');
const tagWrapper = document.querySelector('.tagWrapper');
const tagItem = document.querySelectorAll('.tagWrapper span');
const content2Wrapper = document.querySelector('.content2-wrapper');
const content2WrapperStart = content2Wrapper.getBoundingClientRect().top;
const nav = document.querySelector('.nav');
const navSlideWrapper = document.querySelector('.nav-slide-wrapper');

console.log(content2WrapperStart);

window.addEventListener('load', function(){
  content.classList.add('active');
})

document.addEventListener('scroll', function(){
  if ( scrollY > 500 ) {
    header.classList.remove('active');
    nav.classList.add('active');
  } else {
    header.classList.add('active');
    nav.classList.remove('active');
  }

  if ( scrollY > content2WrapperStart) {
    navSlideWrapper.classList.add('tag1');
  } else if ( scrollY < content2WrapperStart) {
    navSlideWrapper.classList.remove('tag1');
  }
})