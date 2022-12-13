






window.addEventListener('scroll',_.throttle(function(){
    // console.log('scroll!!');
    console.log(window.scrollY);
    if(window.scrollY>700 ){
      //배지 숨기기
      badgeEl.classList.add('--hidden');
      badgeEl.classList.remove('--show');
     
    }else{
      //배지 표시하기
      badgeEl.classList.add('--show');
      badgeEl.classList.remove('--hidden');
     
    }
  
  },300));
  
