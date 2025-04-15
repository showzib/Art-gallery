$(document).ready(function(){
    $('.hamburger-menu').click(function(){
      $('.navigation').toggleClass('change');
    });

    lightbox.option({
        'wrapAround': true
      });
      
      $(window).scroll(function(){
        let position = $(this).scrollTop();

        if(position >= 350) {
            $('.gallery').addClass('change');
        } else{
            $('.gallery').removeClass('change');
        }

      });

        $('writters-accordion').click(function(event){
         
          if(event.target.id.split('-')[0] === 'button') {
            $('#book-1').attr('src' , '/img/writters/' +
             event, target.id.split('-')[1] + '-book1.jpg');
             $('#book-2').attr('src' , '/img/writters/' +
             event.target.id.split('-')[1] + '-book2.jpg');
          }

        });

});