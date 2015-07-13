'use strict';

////////////////////////////////////////////////////////////
////////////////////////////////////////////////// TEMPLATES
////////////////////////////////////////////////////////////
var projectDetailTemplate = _.template($('#project-detail-template').text());

////////////////////////////////////////////////////////////
//////////////////////////////////////////// PROJECT DETAILS
////////////////////////////////////////////////////////////
var objAudiogonDetails = {
	name: 'audiogon.',
	desktopPhoto: 'images/audiogon-desktop.png',
	mobilePhoto: 'images/audiogon-mobile.png',
	projectURL: 'http://app.audiogon.com',
	codeURL: 'null',
	description: 'As a web-based company, this project is the entirety of our existence. It\'s a constant work in progress and an intense joy to improve our application on a daily basis. There are many projects that I\'ve been solely in charge of but most I have the privilege of working on with two other devs. Some of the cooler things we\'ve done are security features, mobile responsiveness, overhauled homepage, internal admin tools, etc.',
	techs: [
		'Ruby',
		'Rails',
		'PostgreSQL',
		'Slim',
		'Underscore.js',
		'Heroku',
		'jQuery',
		'Bootstrap',
		'HTML5',
		'CSS3',
		'Sass'
	]
};

var objHungerCrunchDetails = {
	name: 'hunger crunch.',
	desktopPhoto: 'images/hunger-crunch-desktop.png',
	mobilePhoto: 'images/mobile-placeholder.png',
	projectURL: 'http://www.hungercrunch.com/tournaments',
	codeURL: 'https://github.com/jeffdill2/hunger-crunch-tournament',
	description: 'A Greenville non-profit called Hunger Crunch asked me and two other developers to create a backend and leaderboard site for them that would enable tournament play for their iOS game. We accomplished this in less than 3 weeks, and the client was thrilled with the results!',
	techs: [
		'Parse',
		'jQuery',
		'Moment.js',
		'List.js',
		'Pickadate.js',
		'Underscore.js',
		'HTML5',
		'CSS3',
		'Sass'
	]
};

var objHeeterDetails = {
	name: 'corporate site.',
	desktopPhoto: 'images/heeter-desktop.png',
	mobilePhoto: 'images/mobile-placeholder.png',
	projectURL: 'http://www.heeter.com',
	codeURL: 'null',
	description: 'I helped to develop and was solely responsible for maintaining the company website when Heeter rebranded itself in 2013.',
	techs: [
		'DotNetNuke',
		'JavaScript',
		'SQL Server',
		'HTML5',
		'CSS3',
	]
};

var objProsAndConsDetails = {
	name: 'pros and cons.',
	desktopPhoto: 'images/pros-and-cons-desktop.png',
	mobilePhoto: 'images/pros-and-cons-mobile.png',
	projectURL: 'http://jeffdill2.github.io/pros-and-cons/',
	codeURL: 'https://github.com/jeffdill2/pros-and-cons',
	description: 'Pros and Cons is an app I created to demonstrate moving data around between different Backbone collections. The data resides on an Express server utilizing MongoDB.',
	techs: [
		'Backbone.js',
		'Express',
		'jQuery',
		'Node.js',
		'MongoDB',
		'Underscore.js',
		'HTML5',
		'CSS3',
		'Sass',
		'Responsive Design'
	]
};

var objChatAtchaDetails = {
	name: 'chat atcha.',
	desktopPhoto: 'images/chat-atcha-desktop.png',
	mobilePhoto: 'images/mobile-placeholder.png',
	projectURL: 'http://jeffdill2.github.io/chat-app/',
	codeURL: 'https://github.com/jeffdill2/chat-app',
	description: 'Chat Atcha is a messaging application I built. It stores and retrieves data in real-time from an Express server utilizing MongoDB.  <i>HINT</i>: If you hover over the triangle, you can toggle Auto-Scroll on and off.',
	techs: [
		'Express',
		'jQuery',
		'Node.js',
		'Moment.js',
		'MongoDB',
		'Underscore.js',
		'HTML5',
		'CSS3',
		'Sass'
	]
};

var objCSSAnimationsDetails = {
	name: 'css animations.',
	desktopPhoto: 'images/css-animations-desktop.png',
	mobilePhoto: 'images/mobile-placeholder.png',
	projectURL: 'http://jeffdill2.github.io/iron-yard-day-four/',
	codeURL: 'https://github.com/jeffdill2/iron-yard-day-four',
	description: 'Just having fun exploring and creating a bunch of different CSS animations. Enjoy...',
	techs: [
		'HTML',
		'CSS3',
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
		case 'project-audiogon':
			renderedTemplate = projectDetailTemplate(objAudiogonDetails);
			break;

		case 'project-hunger-crunch':
			renderedTemplate = projectDetailTemplate(objHungerCrunchDetails);
			break;

		case 'project-pros-and-cons':
			renderedTemplate = projectDetailTemplate(objProsAndConsDetails);
			break;

		case 'project-chat-atcha':
			renderedTemplate = projectDetailTemplate(objChatAtchaDetails);
			break;

		case 'project-css-animations':
			renderedTemplate = projectDetailTemplate(objCSSAnimationsDetails);
			break;

		case 'project-heeter':
			renderedTemplate = projectDetailTemplate(objHeeterDetails);
			break;

		default:
			break;
	}

	$('.project-detail').append('<div class="close-button"></div>');
	$('.project-detail').append(renderedTemplate);
	$('.project-detail-backdrop').fadeIn();
	$('.project-detail').fadeIn();
	$('body').addClass('modal-open');
});

$(document).on('click', '.close-button', function() {
	$('.project-detail').html('');
	$('.project-detail').hide();
	$('.project-detail-backdrop').hide();
	$('body').removeClass('modal-open');
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
			if ($(window).scrollTop() > 680) {
				$('.dynamic-header').fadeIn();
			}
		}, 250)
	);
});

////////////////////////////////////////////////////////////
////////////////////////////////////////////////// PORTFOLIO
////////////////////////////////////////////////////////////
$(document).ready(function() {
	var $theRealDeal = $('#portfolio-selector .the-real-deal');
	var $justForFun = $('#portfolio-selector .just-for-fun');
	var $theRealDealContent = $('#the-real-deal-content');
	var $justForFunContent = $('#just-for-fun-content');

	$theRealDeal.on('click', function() {
		$theRealDeal.addClass('active');
		$justForFun.removeClass('active');

		$justForFunContent.slideUp(400);
		$theRealDealContent.slideDown(400);
	});

	$justForFun.on('click', function() {
		$justForFun.addClass('active');
		$theRealDeal.removeClass('active');

		$theRealDealContent.slideUp(400);
		$justForFunContent.slideDown(400);
	});
});

////////////////////////////////////////////////////////////
///////////////////////////////////////////////////// FOOTER
////////////////////////////////////////////////////////////
$(document).ready(function() {
	$('#copyright-year').text(new Date().getFullYear());
});
