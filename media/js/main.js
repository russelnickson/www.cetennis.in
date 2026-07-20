$(document).ready(function() {
				// header image ratio change
				var ratioChange = 1920/561, width = $(document).width(), newHeight;
				var dataWidth = $('.gallery-inside').attr('data-name');
				if(typeof(dataWidth) && dataWidth == 'gallery') {
					width = width-17;
				}
				newHeight = width/ratioChange;
				$('.header-img-fixed').css({'height':newHeight+'px'});//height for header image
				
				$('.header').css('height',newHeight+'px');
				$('.menu-container').css('top',newHeight+'px');
				
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
	$(".single-accordion-head").hover(function(){
		if($(this).parent('div.single-accordion').hasClass('active')) {
			return false;
		}
		$('div.single-accordion').removeClass('active');
		$(this).parent('div.single-accordion').addClass('active');
	}, function() {
	});
});