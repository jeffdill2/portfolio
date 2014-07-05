$('.project-preview').click(function() {
	$('.project-detail-backdrop').show();
	$('.project-detail').prepend('<div class="close-button"></div>')
	$('.project-detail').show();
});

$(document).on('click', '.close-button', function() {
	$('.project-detail').html('');
	$('.project-detail').hide();
	$('.project-detail-backdrop').hide();
});

var aryNavLinks = ['home-link', 'about-link', 'portfolio-link', 'contact-link', 'skills-link'];

aryNavLinks.forEach(function(link) {
	$("." + link).click(function() {
		$('html, body').animate({scrollTop: $("#" + link + '-to').offset().top - 20}, 'slow');
	});
});

$(window).scroll(function() {
	$('.dynamic-header').hide();

    clearTimeout($.data(this, "scrollCheck"));

    $.data(this, "scrollCheck",
    	setTimeout(function() {
    		if ($(window).scrollTop() > 710) {
    			$('.dynamic-header').fadeIn();
    		}
    	}, 250)
    );
});