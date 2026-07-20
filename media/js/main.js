$(document).ready(function() {
				// header image ratio change
				var ratioChange = 1920/561, width = $(document).width(), newHeight;
				var dataWidth = $('.gallery-inside').attr('data-name');
				if(typeof(dataWidth) && dataWidth == 'gallery') {
					width = width-17;
				}
				newHeight = width/ratioChange;
				if(width <= 1103) { newHeight = Math.max(newHeight, 160); }//keep banner usable on small screens
				$('.header-img-fixed').css({'height':newHeight+'px'});//height for header image
				
				$('.header').css('height',newHeight+'px');
				$('.menu-container').css('top',newHeight+'px');

				// mobile hamburger menu
				var menuWrapper = $('.menu-wrapper');
				if(menuWrapper.length && $('.menu-toggle').length === 0) {
					var toggle = $('<div class="menu-toggle" role="button" aria-label="Toggle menu">&#9776;</div>');
					menuWrapper.append(toggle);
					toggle.on('click', function() {
						$('.menu-container').toggleClass('menu-open');
					});
					$('.menu li a').on('click', function() {
						$('.menu-container').removeClass('menu-open');
					});
				}
				
				var links = $('.menu-container'),
				pos = links.offset();
				$(window).scroll(function() {
					// If this section is in view
					var offset = window.pageYOffset
							? window.pageYOffset
							: document.documentElement.scrollTop;	
					//offset = offset;
					if(offset >= pos.top && links.hasClass('default')) {
						links.removeClass('default').addClass('fixed');
						links.css('top','0');
					} else if(offset <= pos.top && links.hasClass('fixed')) {
						links.removeClass('fixed').addClass('default');
						links.css('top',newHeight+'px');
					}
				});
				
	/* $('.single-accordion-head').click(function() {
		if($(this).parent('div.single-accordion').hasClass('active')) {
			return false;
		}
		$('div.single-accordion').removeClass('active');
		$(this).parent('div.single-accordion').addClass('active');
	}); */
	if('ontouchstart' in window || navigator.maxTouchPoints > 0) {
		// touch devices: tap to toggle the accordion
		$('.single-accordion-head').on('click', function() {
			var parent = $(this).parent('div.single-accordion');
			if(parent.hasClass('active')) {
				parent.removeClass('active');
			} else {
				$('div.single-accordion').removeClass('active');
				parent.addClass('active');
			}
		});
	} else {
		$(".single-accordion-head").hover(function(){
			if($(this).parent('div.single-accordion').hasClass('active')) {
				return false;
			}
			$('div.single-accordion').removeClass('active');
			$(this).parent('div.single-accordion').addClass('active');
		}, function() {
		});
	}
});