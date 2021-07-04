/* preloader */
$(window).on('load', function () {
    // var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    // $spinner.fadeOut();
    // $preloader.delay(350).fadeOut('slow');
});

jQuery(document).ready(function($){



	var tl = new TimelineLite();
	tl.to(".wrapper", 1, {opacity: 1, ease: Expo.easeOut});
	tl.to(".who-we-figure-1", 2, {opacity: 1, width: 500, ease: Expo.easeOut});
	// tl.to(".figure-2", 1, {opacity: 1, scale: 0.7, ease: Expo.easeOut}, "-=1");
	// tl.to(".logo", 1, {opacity: 0.9, scale: 1, ease: Expo.easeOut}, "-=1");
	// tl.to(".who-we-are", 2, {opacity: 0.7, scale: 1, ease: Expo.easeInOut, left: 100}, "-=1");
	// tl.to(".we-can", 2, {opacity: 0.7, scale: 1, ease: Expo.easeInOut, top: 100}, "-=1.9");
	// tl.to(".write-to-us", 2, {opacity: 0.7, scale: 1, ease: Expo.easeInOut, bottom: -50}, "-=1.8");
	// tl.to(".done", 2, {opacity: 0.7, scale: 1, ease: Expo.easeInOut, right: -50}, "-=1.7");

	$( ".hover-scale" ).hover(
	  function() {
	    TweenMax.to($(this), 0.3, {scale: 1.2, ease: Expo.easeOut, opacity: 1});
	  }, function() {
	    TweenMax.to($(this), 0.3, {scale: 1, ease: Expo.easeOut, opacity: 0.7});
	  }
	);

	// переход на другие ссылки
	$('a').click(function() {  
		e.preventDefault();
	    $.address.value($(this).attr('href'));  
	});


});

