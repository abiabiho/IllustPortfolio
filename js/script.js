$(document).ready(function(){
  $('.slide-items').slick({
    infinite: true,
    arrows: true,
    autoplaySpeed: 4000,
    autoplay: true,
  });
});

$(function(){
  let pagetop = $('.to-top');
  pagetop.hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 700) {
      pagetop.fadeIn();

    } else {
      pagetop.fadeOut();
    }
  });

  pagetop.click(function() {
    $('body,html').animate({scrollTop: 0}, 500);
    
    return false;
  });
});

$(function(){
  $('a[href^="#"]').click(function(e){
    e.preventDefault();

    const target = $($(this).attr('href'));

    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 500);
    }
  });
});

$(function(){
  function fadeInOnScroll() {
    $('.fade-in').each(function(){
      const elemPos = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll > elemPos - windowHeight + 100) {
        $(this).addClass('show');
      }
    });
  }

  $(window).on('scroll', fadeInOnScroll);
  $(window).on('load', fadeInOnScroll);
});