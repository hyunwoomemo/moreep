const content = document.querySelector('.content');
const header = document.querySelector('header');
const tagWrapper = document.querySelector('.tagWrapper');
const tagItem = document.querySelectorAll('.tagWrapper span');
const content2Wrapper = document.querySelector('.content2-wrapper');
const content2WrapperStart = content2Wrapper.getBoundingClientRect().top;
const content2WrapperEnd = content2Wrapper.getBoundingClientRect().bottom;
const nav = document.querySelector('.nav');
const navSlideWrapper = document.querySelector('.nav-slide-wrapper');
const slideContainer = document.querySelector('.slide-container');
const slideContainerEnd = slideContainer.getBoundingClientRect().bottom;
const cafeInfoWrapper = document.querySelector('.cafe-info');
const cafeInFoEnd = cafeInfoWrapper.getBoundingClientRect().bottom;
const cleanWrapper = document.querySelector('.clean-wrapper');
const cleanStart = cleanWrapper.getBoundingClientRect().top;
const cleanEnd = cleanWrapper.getBoundingClientRect().bottom;
const deskStart = deskWrapper.getBoundingClientRect().top;

window.addEventListener('load', function(){
  content.classList.add('active');
})

document.addEventListener('scroll', function(){
  if ( scrollY > 300 ) {
    header.classList.remove('active');
    nav.classList.add('active');
  } else {
    header.classList.add('active');
    nav.classList.remove('active');
  }

  if ( scrollY > content2WrapperStart - tagWrapper.offsetHeight) {
    navSlideWrapper.classList.add('tag1');
  } else if ( scrollY < content2WrapperStart - tagWrapper.offsetHeight ) {
    navSlideWrapper.classList.remove('tag1');
  }

  if ( scrollY > deskStart) {
    tagItem[0].classList.remove('active');
    tagItem[1].classList.add('active');
  } else {
    tagItem[0].classList.add('active');
    tagItem[1].classList.remove('active');
  }

  if (scrollY > cafeInFoEnd - cafeInfoWrapper.offsetHeight) {
    content2Wrapper.classList.remove('active');
  } else {
    content2Wrapper.classList.add('active');
  }
})
