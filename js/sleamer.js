$(document).ready(function(){
		$('a').click().smoothScroll({offset: -100});		
		$('#artCarousel').slick({
        dots: true,
        speed: 500
      });
});	
