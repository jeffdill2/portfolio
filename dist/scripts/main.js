"use strict";var projectDetailTemplate=_.template($("#project-detail-template").text()),objProsAndConsDetails={name:"pros and cons.",desktopPhoto:"../images/pros-and-cons-desktop.png",mobilePhoto:"../images/pros-and-cons-mobile.png",projectURL:"http://jeffdill2.github.io/pros-and-cons/",codeURL:"https://github.com/jeffdill2/pros-and-cons",description:"Pros and Cons is an app I created to demonstrate moving data around between different Backbone collections. The data resides on an Express server utilizing MongoDB.",techs:["Backbone","Express","Node.js","MongoDB","Underscore","HTML","CSS","Sass","Responsive Design"]},objChatAtchaDetails={name:"chat atcha.",desktopPhoto:"../images/chat-atcha-desktop.png",mobilePhoto:"../images/mobile-placeholder.png",projectURL:"http://jeffdill2.github.io/chat-app/",codeURL:"https://github.com/jeffdill2/chat-app",description:"Chat Atcha is a messaging application I built. It stores and retrieves data in real-time from an Express server utilizing MongoDB.  <i>HINT</i>: If you hover over the triangle, you can toggle Auto-Scroll on and off.",techs:["Express","Node.js","MongoDB","Underscore","HTML","CSS","Sass"]},objImageGalleryDetails={name:"image gallery.",desktopPhoto:"../images/image-gallery-desktop.png",mobilePhoto:"../images/mobile-placeholder.png",projectURL:"http://jeffdill2.github.io/parse-intro/",codeURL:"https://github.com/jeffdill2/parse-intro",description:"As an introduction to Parse, I created an image gallery. Images can uploaded from your local machine and hosted in the cloud via Parse.  <i>NOTE:</i> Filters are also available via Fabric.js, but persisting the filters to Parse is not currently available.",techs:["Parse","Fabric.js","Underscore","HTML","CSS","Sass"]},objCSSAnimationsDetails={name:"css animations.",desktopPhoto:"../images/css-animations-desktop.png",mobilePhoto:"../images/mobile-placeholder.png",projectURL:"http://jeffdill2.github.io/iron-yard-day-four/",codeURL:"https://github.com/jeffdill2/iron-yard-day-four",description:"One of the first projects assigned at the Iron Yard was to explore CSS by creating 30 animations using only CSS. Enjoy...",techs:["HTML","CSS","Sass","Keyframes"]};$(".project-preview").click(function(){var a;switch(this.id){case"project-pros-and-cons":a=projectDetailTemplate(objProsAndConsDetails);break;case"project-chat-atcha":a=projectDetailTemplate(objChatAtchaDetails);break;case"project-image-gallery":a=projectDetailTemplate(objImageGalleryDetails);break;case"project-css-animations":a=projectDetailTemplate(objCSSAnimationsDetails)}$(".project-detail").append('<div class="close-button"></div>'),$(".project-detail").append(a),$(".project-detail-backdrop").fadeIn(),$(".project-detail").fadeIn()}),$(document).on("click",".close-button",function(){$(".project-detail").html(""),$(".project-detail").hide(),$(".project-detail-backdrop").hide()}),$(".resume-print").click(function(){window.print()});var aryNavLinks=["home-link","about-link","portfolio-link","connect-link","resume-link"];aryNavLinks.forEach(function(a){$("."+a).click(function(){$("html, body").animate({scrollTop:$("#"+a+"-to").offset().top-20},"slow")})}),$(window).scroll(function(){$(".dynamic-header").hide(),clearTimeout($.data(this,"scrollCheck")),$.data(this,"scrollCheck",setTimeout(function(){$(window).scrollTop()>680&&$(".dynamic-header").fadeIn()},250))});