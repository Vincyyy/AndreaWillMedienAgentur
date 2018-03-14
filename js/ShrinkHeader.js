$(window).scroll(function() {
    //gets the initial vertical position of the scrollbar - if it leaves the position, remove class
    if ($(window).scrollTop()){
      $('nav').addClass('black');
      //$('nav').addClass('navbar-light');
      //$('nav').removeClass('navbar-dark');
    }
    else{
      $('nav').removeClass('black');
      //$('nav').removeClass('navbar-light');
      //$('nav').addClass('navbar-dark');
    }
  });