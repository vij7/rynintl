

$(document).ready(function() {

 "use strict";
 // ==========

 // 	$('#nav-icon').click(function(){
	// 	$(this).toggleClass('open');
	// 	$(".menu_wrp").slideToggle().toggleClass("active");
	// });

	// $(window).scroll(function(){
	//   var sticky = $('.header_section'),
	//       scroll = $(window).scrollTop();

	//   if (scroll >= 100) sticky.addClass('sticky');
	//   else sticky.removeClass('sticky');
	// });


	// $('#nav-icon').click(function(){
	// 	$(this).toggleClass('open');
	// 	$(".menu_wrp").toggleClass("active");
	// });

	// $('.menu_wrp ul .fa-angle-left').click(function(){
	// 	$(this).next("ul").slideToggle();
	// 	$(this).toggleClass("active");
	// 	// $(".menu_wrp ul ul").slideToggle();
	// });

	$('.logo_section_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    items:4,
	    dots: false,
	    autoplay:false,
	    autoplayTimeout:5000,
	    smartSpeed: 1300
	    // animateOut: "fadeOut",
	    // animateIn: "fadeIn"
	});

	$('.feedback_slider').owlCarousel({
	    loop:true,
	    margin:0,
	    nav:false,
	    dots: false,
	    items:3,
	    autoplay: true,
	    autoplayTimeout: 3000
	});


	
	var head_h = $(".header_section").outerHeight();
	var wind_h = $(window).height();
	var banner_h = wind_h - head_h;

	$(".banner_section").css("height", banner_h);
	
	$(".register").css({"min-height" : banner_h, 'height' : 'auto'});
	

});

// jQuery(window).trigger('resize').trigger('scroll');