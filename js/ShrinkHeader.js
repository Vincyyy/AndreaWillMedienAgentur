$(window).scroll(function() {
    //gets the initial vertical position of the scrollbar - if it leaves the position, remove class
    if ($(window).scrollTop()){
      $('nav').addClass('black');
    }
    else{
      $('nav').removeClass('black');
    }
  });