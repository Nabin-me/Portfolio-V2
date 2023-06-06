// ------------------------------------------------
// Project Name: Marvio - Coming Soon & Portfolio Template
// Project Description: Marvio - awesome coming soon and portfolio template to kick-start your project
// Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
// Version: 1.0.2
// Build Date: May 2022
// Last Update: January 2023
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader
//  2. Swiper Slider
//  3. Typed.js Plugin Settings
//  4. Skillbars
//  5. Magnific Popup Video
//  6. KBW-Countdown
//  7. Vegas Kenburns
//  8. Mailchimp Notify Form
//  9. Contact Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader Start
  // --------------------------------------------- //
  $(".loader__circle").addClass('fade');

  setTimeout(function(){
    $(".loader").addClass('loaded');
    $("#main").addClass('animate-in');
    $("#header").addClass('animate-in');
  }, 300);

  setTimeout(function(){

    // --------------------------------------------- //
    // Swiper Slider Main Screen Start
    // --------------------------------------------- //
    var mainSlider      = $('.swiper');

    if (mainSlider.length) {
      var swiper = new Swiper('.swiper', {
        preventClicks: false,
        preventClicksPropagation: false,
        grabCursor: true,
        effect: "creative",
        creativeEffect: {
          prev: {
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        },
        parallax: true,
        speed: 1300,
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    };
    // --------------------------------------------- //
    // Swiper Slider Main Screen End
    // --------------------------------------------- //

  }, 800);
  // --------------------------------------------- //
  // Loader End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Typed.js Plugin Settings Start
  // --------------------------------------------- //
  var animatedHeadline = $(".animated-headline");
  if(animatedHeadline.length){
    var typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      loop: true,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2500
    });
  }
  // --------------------------------------------- //
  // Typed.js Plugin Settings End
  // --------------------------------------------- //

});

$(function() {

  "use strict";

  // --------------------------------------------- //
  // Skillbars Settings Start
  // --------------------------------------------- //
  $('.skillbar').skillBars({
    from: 0,
    speed: 4000,
    interval: 100,
  });
  // --------------------------------------------- //
  // Skillbars Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Magnific Popup Video Start
  // --------------------------------------------- //
  $('#inner-video-trigger').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function() { $('body').addClass('overflow-hidden'); },
      close: function() { $('body').removeClass('overflow-hidden'); }
    }
	});

  $('#showreel-trigger').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
    fixedContentPos: false,
    callbacks: {
      beforeOpen: function() { $('body').addClass('overflow-hidden'); },
      close: function() { $('body').removeClass('overflow-hidden'); }
    }
	});
  // --------------------------------------------- //
  // Magnific Popup Video End
  // --------------------------------------------- //

  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Kenburns Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 8000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "../img/projects/esports.png" },
        { src: "../img/projects/stream design.png" },
        { src: "../img/projects/music app concept.png" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  }
  // --------------------------------------------- //
  // Vegas Kenburns End
  // --------------------------------------------- //

  
  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

 
});
