////////////////////////////////////////////////////////////
////////////////////////////////////////////////// TEMPLATES
////////////////////////////////////////////////////////////
var projectDetailTemplate = _.template($('#project-detail-template').text());

////////////////////////////////////////////////////////////
//////////////////////////////////////////// PROJECT DETAILS
////////////////////////////////////////////////////////////
var objProsAndConsDetails = {
	desktopPhoto: '../images/pros-and-cons-desktop.png',
	mobilePhoto: '../images/pros-and-cons-mobile.png',
	description: 'Pros and Cons is badass!',
	techs: [
		'test1',
		'test2',
		'test3'
	]
};

var objChatAtchaDetails = {
	desktopPhoto: '../images/chat-atcha-desktop.png',
	mobilePhoto: '../images/mobile-placeholder.png',
	description: 'test',
	techs: [
		'test1',
		'test2',
		'test3'
	]
};

var objImageGalleryDetails = {
	desktopPhoto: '../images/image-gallery-desktop.png',
	mobilePhoto: '../images/mobile-placeholder.png',
	description: 'test',
	techs: [
		'test1',
		'test2',
		'test3'
	]
};

var objCSSAnimationsDetails = {
	desktopPhoto: '../images/css-animations-desktop.png',
	mobilePhoto: '../images/mobile-placeholder.png',
	description: 'test',
	techs: [
		'test1',
		'test2',
		'test3'
	]
};

////////////////////////////////////////////////////////////
////////////////////////////////////////// PROJECT FUNCTIONS
////////////////////////////////////////////////////////////
$('.project-preview').click(function() {
	var renderedTemplate;

	switch (this.id) {
		case 'project-pros-and-cons':
			renderedTemplate = projectDetailTemplate(objProsAndConsDetails);
			break;

		case 'project-chat-atcha':
			renderedTemplate = projectDetailTemplate(objChatAtchaDetails);
			break;

		case 'project-image-gallery':
			renderedTemplate = projectDetailTemplate(objImageGalleryDetails);
			break;

		case 'project-css-animations':
			renderedTemplate = projectDetailTemplate(objCSSAnimationsDetails);
			break;

		default:
			break;
	}

	$('.project-detail').append('<div class="close-button"></div>')
	$('.project-detail').append(renderedTemplate);
	$('.project-detail-backdrop').fadeIn();
	$('.project-detail').fadeIn();
});

$(document).on('click', '.close-button', function() {
	$('.project-detail').html('');
	$('.project-detail').hide();
	$('.project-detail-backdrop').hide();
});

////////////////////////////////////////////////////////////
//////////////////////////////////////////// NAVIGATION BARS
////////////////////////////////////////////////////////////
var aryNavLinks = ['home-link', 'about-link', 'portfolio-link', 'connect-link', 'skills-link'];

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