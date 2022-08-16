const deskTop = document.querySelector('.content2-wrapper > span:first-of-type');
const deskTopNum = deskTop.getBoundingClientRect().top;
const deskBtn = document.querySelector('#desk');
const navHeight = document.querySelector('.nav').offsetHeight;
console.log(deskTopNum);

const deskMove = () => {
  window.scrollTo({top: deskTopNum-navHeight, behavior: 'smooth'});
};

deskBtn.addEventListener('click', () => {
  deskMove();
})