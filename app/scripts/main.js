'use strict';

(function($) {
  $(document).ready(function() {
  	$('#about').click(function (){
                    $('html, body').animate({
                        scrollTop: $('.section-about').offset().top - 55
                    }, 2000);
            });
  	$('#experience').click(function (){
                    $('html, body').animate({
                        scrollTop: $('.section-experience').offset().top - 55
                    }, 1000);
            });
  	$('#contact').click(function (){
                    $('html, body').animate({
                        scrollTop: $('.section-contact').offset().top - 55
                    }, 1000);
            });

  	$('.experience').on('click', function(eventObject) {
      eventObject.preventDefault();
      $(this).toggleClass('active');
    });

    $('#nav-toggle').on('click', function(eventObject) {
      eventObject.preventDefault();
      $('.site-menu').toggleClass('active');
      $('#nav-toggle').toggleClass('active');
    });

    $('.site-menu').on('click', function(eventObject) {
      eventObject.preventDefault();
      $('.site-menu').toggleClass('active');
      $('#nav-toggle').toggleClass('active');
    });

  });
})(jQuery);
