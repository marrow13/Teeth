// loaded
$(document).ready(function(){

	// main-slider
	if ($.fn.carousel){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	}

	$('.centered').each(function(i, elem) {
		$(elem).css('margin-top', ($('#main-slider').height() - $(elem).height())/2);
	});

	$(window).resize(function(){
		$( '.centered' ).each(function( i, elem ) {
			$(elem).css('margin-top', ($('#main-slider').height() - $(elem).height())/2);
		});
	});

	// contact form
	var form = $('.contact-form');
	form.submit(function(e) {
		e.preventDefault();
		var $this = $(this);
		$.post(
			// url
			$(this).attr('action'),
			// data
			{
				name: $('#userName').val().trim(),
				secondName: $('#userLastName').val().trim(),
				email: $('#mail').val().trim(),
				message: $('#message').val().trim()
			},
			// success
			function(data) {
				$this.prev().text(data.message).fadeIn().delay(3000).fadeOut();
			},
			// type
			'json'
		);
	});

	// goto top
	$('.gototop').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	});

	// Pretty Photo
	if ($.fn.prettyPhoto){
		$("a[rel^='prettyPhoto']").prettyPhoto({
			social_tools: false
		});
	}

	// portfolio
	$(window).load(function(){
		var $filter = $('.portfolio-filter > li > a');
		if ($.fn.isotope) {
			var $portfolio = $('.portfolio-items');
			$portfolio.isotope({
				itemSelector : 'li',
				layoutMode : 'fitRows'
			});
			$filter.on('click', function(e){
				e.preventDefault();
				$filter.removeClass('active');
				$(this).addClass('active');
				var selector = $(this).attr('data-filter');
				$portfolio.isotope({ filter: selector });
			});
		}
	});

});