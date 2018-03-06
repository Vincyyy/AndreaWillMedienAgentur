$(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('nav').addClass('shrink');
      $('nav').addClass('bg-dark');
    } else {
      $('nav').removeClass('shrink');
      $('nav').removeClass('bg-dark');
    }
  });