'use strict';

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
	projectURL: 'http://jeffdill2.github.io/pros-and-cons/',
	codeURL: 'https://github.com/jeffdill2/pros-and-cons',
	description: 'Pros and Cons is an app I created to demonstrate moving data around between different Backbone collections. The data resides on an Express server utilizing MongoDB.',
	techs: [
		'Backbone',
		'Express',
		'Node.js',
		'MongoDB',
		'Underscore',
		'HTML',
		'CSS',
		'Sass',
		'Responsive Design'
	]
};

var objChatAtchaDetails = {
	desktopPhoto: '../images/chat-atcha-desktop.png',
	mobilePhoto: '../images/mobile-placeholder.png',
	projectURL: 'http://jeffdill2.github.io/chat-app/',
	codeURL: 'https://github.com/jeffdill2/chat-app',
	description: 'Chat Atcha is a messaging application I built. It stores and retrieves data in real-time from an Express server utilizing MongoDB.  <i>HINT</i>: If you hover over the triangle, you can toggle Auto-Scroll on and off.',
	techs: [
		'Express',
		'Node.js',
		'MongoDB',
		'Underscore',
		'HTML',
		'CSS',
		'Sass'
	]
};

var objImageGalleryDetails = {
	desktopPhoto: '../images/image-gallery-desktop.png',
	mobilePhoto: '../images/mobile-placeholder.png',
	projectURL: 'http://jeffdill2.github.io/parse-intro/',
	codeURL: 'https://github.com/jeffdill2/parse-intro',
	description: 'test',
	techs: [
		'Parse',
		'Fabric.js',
		'Underscore',
		'HTML',
		'CSS',
		'Sass'
	]
};

var objCSSAnimationsDetails = {
	desktopPhoto: '../images/css-animations-desktop.png',
	mobilePhoto: '../images/mobile-placeholder.png',
	projectURL: 'http://jeffdill2.github.io/iron-yard-day-four/',
	codeURL: 'https://github.com/jeffdill2/iron-yard-day-four',
	description: 'test',
	techs: [
		'HTML',
		'CSS',
		'Sass',
		'Keyframes'
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

	$('.project-detail').append('<div class="close-button"></div>');
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
var aryNavLinks = ['home-link', 'about-link', 'portfolio-link', 'connect-link', 'resume-link'];

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
			if ($(window).scrollTop() > 700) {
				$('.dynamic-header').fadeIn();
			}
		}, 250)
	);
});