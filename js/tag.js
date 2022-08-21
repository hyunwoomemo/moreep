tagItem[0].addEventListener('click', () => {
  window.scrollTo({top: content2WrapperStart, behavior: 'smooth'});
})


const deskWrapperStart = deskWrapper.getBoundingClientRect().top;

tagItem[1].addEventListener('click', () => {
  window.scrollTo({top: deskWrapperStart, behavior: 'smooth'});
})