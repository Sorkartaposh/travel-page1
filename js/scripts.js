(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

		// menu fixed
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 0) {
				jQuery(".header-area").addClass('menufixed');
			} else {
				jQuery('.header-area').removeClass('menufixed');
			}
		});

		// dticky logo
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 0) {
				jQuery(".imglogo").attr('src','images/sticky-logo.png');
			} else {
				jQuery('.imglogo').attr('src','images/logo.png');
			}
		});

		// menu color
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 0) {
				jQuery(".menu-area ul li a").addClass('stickymenu');
			} else {
				jQuery(".menu-area ul li a").removeClass('stickymenu');
			}
		});
		// owlCarousel-3
		$('.owl-carousel3').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:false,
			dots:false,
			autoplayTimeout:2000,
			navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
			responsive:{
				0:{
					items:1
				},
			}
		});

		// owlCarousel-2
		$('.owl-carousel2').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:false,
			dots:false,
			autoplayTimeout:2000,
			navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
			responsive:{
				0:{
					items:1
				},
				576:{
					items:2
				},
				768:{
					items:3
				},
				992:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});

		// owl carousel 1
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			nav:true,
			autoplay:true,
			navText : ["<i class='fa-solid fa-arrow-left-long'></i>","<i class='fa-solid fa-arrow-right-long'></i>"],
			autoplayTimeout:10000,
			responsive:{
				0:{
					items:1,
				},
				550:{
					items:2,
				},
				600:{
					items:2,
					stagePadding: 100,
				},
				800:{
					items:3,
					stagePadding: 40,
				},
				1000:{
					items:3,
					stagePadding: 170,
				},
				1200:{
					items:4,
					stagePadding: 150,
				},
				1200:{
					items:4,
					stagePadding: 120,
				},
				1400:{
					items:5,
					stagePadding: 150,
				},
				1700:{
					items:5,
					stagePadding: 180,
				},
			}
		})

	
		// video popup
		jQuery(document).ready(function ($) {
			$('.show-modal').on('click', function () {
				$.showYtVideo({
					videoId: 'c7XEhXZ_rsk'
				});
			});
		});
		
		// HAMBURGER	
		$(document).ready(function(){
			$(".hamburger").click(function(){
			  $(this).toggleClass("is-active");
			});
		  });
		
		// menu item show hide
		jQuery('.hamburger').click(function(){
			jQuery('.menu-area').slideToggle(300);

		})
		
		
		
		
		
	});
})(jQuery);