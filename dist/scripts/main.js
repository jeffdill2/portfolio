"use strict";Parse.initialize("Q1ZExtp5mump0KEQt58uJSb8HHtD47qO0I0VeGmt","49jnR1OKE8VPvnM2GpkHv7tbao9NEiUj1XJXYaqX");var projectDetailTemplate=_.template($("#project-detail-template").text()),objShowroomDetails={name:"showroom.",desktopPhoto:"images/showroom-desktop.png",mobilePhoto:"images/showroom-mobile.png",projectURL:"http://showroom.audiogon.com",codeURL:"null",description:"My first project as an employee of Audiogon was to create a photo browsing experience for users to be able to discover beautiful pictures of listings on Audiogon's eCommerce site. Data is pulled in the background via Audiogon's API and displayed quickly and efficiently at runtime by utilizing lazy loading. I was given 3 weeks to complete this task so that it could be announced with the shipping of a release that had already been announced for the eCommerce site. It will be a constant work-in-progress to add many great new features!",techs:["Ruby","Rails","PostgreSQL","Slim","Underscore.js","Heroku","jQuery","Bootstrap","HTML5","CSS3","Sass"]},objHungerCrunchDetails={name:"hunger crunch.",desktopPhoto:"images/hunger-crunch-desktop.png",mobilePhoto:"images/mobile-placeholder.png",projectURL:"http://www.hungercrunch.com/tournaments",codeURL:"https://github.com/jeffdill2/hunger-crunch-tournament",description:"A Greenville non-profit called Hunger Crunch asked me and two other developers to create a backend and leaderboard site for them that would enable tournament play for their iOS game. We accomplished this in less than 3 weeks, and the client was thrilled with the results!",techs:["Parse","jQuery","Moment.js","List.js","Pickadate.js","Underscore.js","HTML5","CSS3","Sass"]},objHeeterDetails={name:"corporate site.",desktopPhoto:"images/heeter-desktop.png",mobilePhoto:"images/mobile-placeholder.png",projectURL:"http://www.heeter.com",codeURL:"null",description:"I helped to develop and was solely responsible for maintaining the company website when Heeter rebranded itself in 2013.",techs:["DotNetNuke","JavaScript","SQL Server","HTML5","CSS3"]},objProsAndConsDetails={name:"pros and cons.",desktopPhoto:"images/pros-and-cons-desktop.png",mobilePhoto:"images/pros-and-cons-mobile.png",projectURL:"http://jeffdill2.github.io/pros-and-cons/",codeURL:"https://github.com/jeffdill2/pros-and-cons",description:"Pros and Cons is an app I created to demonstrate moving data around between different Backbone collections. The data resides on an Express server utilizing MongoDB.",techs:["Backbone.js","Express","jQuery","Node.js","MongoDB","Underscore.js","HTML5","CSS3","Sass","Responsive Design"]},objChatAtchaDetails={name:"chat atcha.",desktopPhoto:"images/chat-atcha-desktop.png",mobilePhoto:"images/mobile-placeholder.png",projectURL:"http://jeffdill2.github.io/chat-app/",codeURL:"https://github.com/jeffdill2/chat-app",description:"Chat Atcha is a messaging application I built. It stores and retrieves data in real-time from an Express server utilizing MongoDB.  <i>HINT</i>: If you hover over the triangle, you can toggle Auto-Scroll on and off.",techs:["Express","jQuery","Node.js","Moment.js","MongoDB","Underscore.js","HTML5","CSS3","Sass"]},objImageGalleryDetails={name:"image gallery.",desktopPhoto:"images/image-gallery-desktop.png",mobilePhoto:"images/mobile-placeholder.png",projectURL:"http://jeffdill2.github.io/parse-intro/",codeURL:"https://github.com/jeffdill2/parse-intro",description:"As an introduction to Parse, I created an image gallery. Images can uploaded from your local machine and hosted in the cloud via Parse.  <i>NOTE:</i> Filters are also available via Fabric.js, but persisting the filters to Parse is not currently available.",techs:["Parse","jQuery","Fabric.js","Underscore.js","HTML5","CSS3","Sass"]},objCSSAnimationsDetails={name:"css animations.",desktopPhoto:"images/css-animations-desktop.png",mobilePhoto:"images/mobile-placeholder.png",projectURL:"http://jeffdill2.github.io/iron-yard-day-four/",codeURL:"https://github.com/jeffdill2/iron-yard-day-four",description:"One of the first projects assigned at the Iron Yard was to explore CSS by creating 30 animations using only CSS. Enjoy...",techs:["HTML","CSS3","Sass","Keyframes"]};$(".project-preview").click(function(){var a;switch(this.id){case"project-showroom":a=projectDetailTemplate(objShowroomDetails);break;case"project-hunger-crunch":a=projectDetailTemplate(objHungerCrunchDetails);break;case"project-pros-and-cons":a=projectDetailTemplate(objProsAndConsDetails);break;case"project-chat-atcha":a=projectDetailTemplate(objChatAtchaDetails);break;case"project-image-gallery":a=projectDetailTemplate(objImageGalleryDetails);break;case"project-css-animations":a=projectDetailTemplate(objCSSAnimationsDetails);break;case"project-heeter":a=projectDetailTemplate(objHeeterDetails)}$(".project-detail").append('<div class="close-button"></div>'),$(".project-detail").append(a),$(".project-detail-backdrop").fadeIn(),$(".project-detail").fadeIn(),$("body").addClass("modal-open")}),$(document).on("click",".close-button",function(){$(".project-detail").html(""),$(".project-detail").hide(),$(".project-detail-backdrop").hide(),$("body").removeClass("modal-open")});var aryNavLinks=["home-link","about-link","portfolio-link","connect-link","resume-link"];aryNavLinks.forEach(function(a){$("."+a).click(function(){$("html, body").animate({scrollTop:$("#"+a+"-to").offset().top-20},"slow")})}),$(window).scroll(function(){$(".dynamic-header").hide(),clearTimeout($.data(this,"scrollCheck")),$.data(this,"scrollCheck",setTimeout(function(){$(window).scrollTop()>680&&$(".dynamic-header").fadeIn()},250))});