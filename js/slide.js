const sliderWrapper = document.querySelector('.slide-banner');
const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
let currentIndex = 0;
let topHeight = 0;
const navPrev = document.querySelector('#prev');
const navNext = document.querySelector('#next');
timer = null;
pagerHTML = '';
pager = document.querySelector('.pager');
/* pagerBtn = document.querySelectorAll('.pager span'); */

window.addEventListener('load', function(){
  calculateTallestSlide();
});

// 슬라이드의 높이 확인하여 부모의 높이로 지정하기

function calculateTallestSlide(){

    for (i = 0; i < slideCount; i++){
        if(slides[i].offsetHeight > topHeight){
            topHeight = slides[i].offsetHeight;
        }
    }
    sliderWrapper.style.height = `${topHeight-100}px`;
    sliderContainer.style.height = `${topHeight - 160}px`;
}

calculateTallestSlide();

// 슬라이드가 있으면 가로로 배열하기

    for ( i = 0; i < slideCount; i++){
        slides[i].style.left = `${i*100}%`
        pagerHTML += `<span data-idx="${0}">${i+1}</span>`;
        pager.innerHTML = pagerHTML;
    }

    const pagerBtn = document.querySelectorAll('.pager span');

// 슬라이드 이동 함수
function goToSlide(idx){
    sliderContainer.classList.add('animated')
    sliderContainer.style.left = `${idx*-100}%`;
    currentIndex = idx;

    for( j = 0; j < pagerBtn.length; j++){
        pagerBtn[j].classList.remove('active');
        pagerBtn[idx].classList.add('active');
    }

/*     updateNav(); */
}

// 버튼기능 업데이트 함수

function updateNav(){
    //처음일때
    if(currentIndex === 0){
        navPrev.classList.add('disabled');
    }
    else {
        navPrev.classList.remove('disabled');
    }
    //마지막일때
    if(currentIndex === slideCount-1){
        navNext.classList.add('disabled');
    }
    else {
        navNext.classList.remove('disabled');
    }
}

// 버튼을 클릭하면 슬라이드 이동시키기 

navPrev.addEventListener('click', function(event){
    event.preventDefault();
    if( currentIndex === 0){
        goToSlide(slideCount-1);
    } else {
        goToSlide(currentIndex - 1);
    }
    //처음이 아니라면 이전.. goToSlide(currentIndex - 1)
    //처음이라면 goToSlide(???)
})

navNext.addEventListener('click', function(event){
    event.preventDefault();
    if( currentIndex === slideCount-1){
        goToSlide(0);
    } else {
        goToSlide(currentIndex + 1);
    }
    //끝이 아니라면 이전.. goToSlide(currentIndex + 1)
    //끝이라면 goToSlide(???)
})

// 첫번째 슬라이드 먼저 보이도록 하기

goToSlide(0);

//자동슬라이드 
//4초마다 goToSlide(숫자); 0, 1, 2, 3,.....5, 0
// setInterval(할일, 4000);
// 함수 = 할일 = fucntion(){ 실제 할일 }
// 실제 할일 = goToSlide(숫자); 0, 1, 2, 3,.....5, 0

//clearInterval(대상)

//자동 슬라이드 함수
function startAutoSlide(){
    timer = setInterval(function(){ 
        let nextIdx = (currentIndex + 1) % slideCount; //나눈 나머지
        goToSlide(nextIdx);
    
    }, 4000);
}

startAutoSlide();

function stopAutoSlide(){
    clearInterval(timer);
}

/* 
    sliderWrapper에 마우스가 들어오면 할일, 나가면 할일
    sliderWrapper.addEventListener('mouseenter',function(){
        
    })
    sliderWrapper.addEventListener('mouseleave',function(){

    })
*/

    sliderWrapper.addEventListener('mouseenter',function(){
        stopAutoSlide();
    })

    sliderWrapper.addEventListener('mouseleave',function(){
        startAutoSlide();
    })

    //pager로 슬라이드 이동하기

    for( i = 0; i < pagerBtn.length; i++){
        pagerBtn[i].addEventListener('click',function(event){
            let pagerNum = event.target.textContent-1;
            //innerText 내용 반환 A.innerText / A.innerText = 'B';
            // innerHTML 의 태그를 반환 A.innerHTML / A.innerHTML = '<h2>';
            goToSlide(pagerNum);

            //클릭된 그 요소에만 active 추가

        })
    }