$(document).ready(function(){
      $('a').click().smoothScroll(/*{offset: -100}*/);
      var $carousel = $('#artCarousel');
      $carousel.slick({
      slidesToShow: 1,
      slidesToScroll: 1
      });

      $('.js-filter').on('click', function() {
          // Undo any previous filtering
          $carousel.slickUnfilter();
          $('li').removeClass('active');
          $(this).parent().addClass('active');
          var navArtSubject = $(this).data('art-subject');
          if (navArtSubject !== 'all') {
              $carousel.slickFilter('.artImage[data-art-subject="' + navArtSubject + '"]');
          }
      });

});