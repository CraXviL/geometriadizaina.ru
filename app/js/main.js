var hidden = true;
var zoom = false;
$(document).ready(function() {
	$('.owl-carousel').owlCarousel({
		loop:true,
		mouseDrag:true,
		touchDrag:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		items:3,
		margin:20
	});
	scroll();
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		removalDelay: 300,
		zoom: {
    		enabled: true,
    		duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
		},
		gallery: {
		    enabled: true,
		    navigateByImgClick: true,
		    preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		}
	});
})

function scroll() {
	$('#menu-portfolio').click(function() {
		var height = $('#block-main').css('height');
		$('html').animate({scrollTop:height});
		window.location = '#block-portfolio';
	});
	$('#menu-price').click(function() {
		var height1 = parseInt($('#block-main').css('height'));
		var height2 = parseInt($('#block-portfolio').css('height'));
		$('html').animate({scrollTop:height1+height2});
		window.location = '#block-price';
	});
	$('#menu-contact').click(function() {
		var height1 = parseInt($('#block-main').css('height'));
		var height2 = parseInt($('#block-portfolio').css('height'));
		var height3 = parseInt($('#block-price').css('height'));
		$('html').animate({scrollTop:height1+height2+height3});
		window.location = '#block-order';
	});
}