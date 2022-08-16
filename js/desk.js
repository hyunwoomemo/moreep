const deskWrapper = document.querySelector('.desk-wrapper');
const deskImage = document.querySelectorAll('.desk-wrapper img');

for ( i = 0; i < deskImage.length; i++) {
  deskImage[i].addEventListener('mouseenter', function(e){
    for ( j = 0; j < deskImage.length; j++) {
      deskImage[j].classList.add('gray');
      deskImage[j].classList.remove('active');
      e.target.classList.remove('gray');
      e.target.classList.add('active');
    }
  })
}

for ( i = 0; i < deskImage.length; i++) {
  deskImage[i].addEventListener('mouseleave', function(e){
    for ( j = 0; j < deskImage.length; j++) {
      deskImage[j].classList.remove('gray');
    }
  })
}