/*! ------------------------------------------------
 * Project Name: Marvio - Coming Soon & Portfolio Template
 * Project Description: Marvio - awesome coming soon and portfolio template to kick-start your project
 * Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
 * Version: 1.0.2
 * Build Date: May 2022
 * Last Update: January 2023
 * This product is available exclusively on Themeforest
 * Author: mix_design
 * Author URI: https://themeforest.net/user/mix_design
 * File name: app.js
 * ------------------------------------------------

 * ------------------------------------------------
 * Table of Contents
 * ------------------------------------------------
 *
 *  1. SVG Fallback
 *  2. Chrome Smooth Scroll
 *  3. Images moving ban
 *  4. Main Menu & Sections Behavior
 *  5. Popup Open/Close
 *  6. Header Appearance Change on Scroll
 *  7. Popups Behavior
 *  8. Buttons Hover Effect
 *
 * ------------------------------------------------
 * Table of Contents End
 * ------------------------------------------------ */

$(function() {

  "use strict";

  // SVG Fallback
  if(!Modernizr.svg) {
    $("img[src*='svg']").attr("src", function() {
      return $(this).attr("src").replace(".svg", ".png");
    });
  };

  // Chrome Smooth Scroll
  try {
    $.browserSelector();
    if($("html").hasClass("chrome")) {
      $.smoothScroll();
    }
  } catch(err) {
  };

  // Images moving ban
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

  // Main Menu & Sections Behavior
  var menu             = $('#menu'),
      menuTrigger      = $('#menu-trigger'),
      menuTriggerIntro = $('#menu-trigger-intro'),
      menuClose        = $('#menu-close'),
      mainSection      = $('#main'),
      header           = $('#header'),
      homeTrigger      = $('#home-trigger'),
      aboutTrigger     = $('#about-trigger'),
      aboutSection     = $('#about'),
      aboutClose       = $('#about-close'),
      portfolioTrigger = $('#portfolio-trigger'),
      portfolioSection = $('#portfolio'),
      portfolioClose   = $('#portfolio-close'),
      contactTrigger   = $('#contact-trigger'),
      contactSection   = $('#contact'),
      contactClose     = $('#contact-close');

  menuTrigger.on("click", function(event) {
    event.preventDefault();
    $('.active').addClass('animate-out');
    menu.animate({ scrollTop: 0 , });
    header.addClass('animate-out').removeClass('inner-is-visible');
    setTimeout(function() {
      menu.addClass('animate-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        menuClose.addClass('is-scaled-up');
      });
    }, 800);
    setTimeout(function() {
      $('.active').removeClass('animate-out animate-in');
      $('.active').animate({ scrollTop: 0 , });
      $('.active .inner__content').animate({ scrollTop: 0 , });
      header.removeClass('animate-out animate-in');
    }, 1400);
  });

  menuTriggerIntro.on("click", function(event) {
    event.preventDefault();
    $('.active').addClass('animate-out');
    menu.animate({ scrollTop: 0 , });
    header.addClass('animate-out').removeClass('inner-is-visible');
    setTimeout(function() {
      menu.addClass('animate-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
        menuClose.addClass('is-scaled-up');
      });
    }, 800);
    setTimeout(function() {
      $('.active').removeClass('animate-out animate-in');
      $('.active').animate({ scrollTop: 0 , });
      $('.active .inner__content').animate({ scrollTop: 0 , });
      header.removeClass('animate-out animate-in');
    }, 1400);
  });

  menuClose.on("click", function(event) {
    event.preventDefault();
    menu.addClass('animate-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      menuClose.removeClass('is-scaled-up');
      $('.active').addClass('animate-in');
      header.addClass('animate-in');
    });
    setTimeout(function() {
      menu.removeClass('animate-in animate-out');
    }, 1400);
  });

  $('.navigation li a').on("click", function(event) {
    event.preventDefault();
    $('.active').removeClass('active');
    header.addClass('animate-in');
    menu.addClass('animate-out').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      menuClose.removeClass('is-scaled-up');
    });
    setTimeout(function() {
      menu.removeClass('animate-in animate-out');
    }, 1400);
  });

  homeTrigger.on("click", function(event) {
    event.preventDefault();
    mainSection.addClass('active animate-in');
  });

  aboutTrigger.on("click", function(event) {
    event.preventDefault();
    aboutSection.addClass('active animate-in');
  });

  portfolioTrigger.on("click", function(event) {
    event.preventDefault();
    portfolioSection.addClass('active animate-in');
  });

  contactTrigger.on("click", function(event) {
    event.preventDefault();
    contactSection.addClass('active animate-in');
  });

  // Header Appearance Change on Scroll
  var header         = $('#header'),
      aboutSection   = $('#about'),
      portfolioSection   = $('#portfolio'),
      contactSection = $('#contact'),
      mainSection    = $('#main');

  mainSection.on("scroll", function() {
    if ($('.main__content').offset().top < 10) {
      header.addClass('smaller');
    } else {
      header.removeClass('smaller');
    }
  });

  aboutSection.on("scroll", function() {
    header.addClass('smaller');
    if ($('#about .inner__content').offset().top < -50) {
      header.addClass('smaller');
    } else {
      header.removeClass('smaller');
    }
  });

  portfolioSection.on("scroll", function() {
    header.addClass('smaller');
    if ($('#portfolio .inner__content').offset().top < -50) {
      header.addClass('smaller');
    } else {
      header.removeClass('smaller');
    }
  });

  contactSection.on("scroll", function() {
    header.addClass('smaller');
    if ($('#contact .inner__content').offset().top < -50) {
      header.addClass('smaller');
    } else {
      header.removeClass('smaller');
    }
  });

  // Popup Open/Close
  var notify            = $('#notify'),
      notifyTrigger     = $('#notify-trigger'),
      notifyTriggerMenu = $('#notify-trigger-menu'),
      notifyClose       = $('#notify-close'),
      project1          = $('#project-1'),
      projectClose1     = $('#project-close-1'),
      projectTrigger1   = $('#project-trigger-1'),
      project2         = $('#project-2'),
      projectClose2     = $('#project-close-2'),
      projectTrigger2   = $('#project-trigger-2'),
      project3         = $('#project-3'),
      projectClose3     = $('#project-close-3'),
      projectTrigger3   = $('#project-trigger-3');

  // Notify Form Open
  notifyTrigger.on('click', function(event){
    event.preventDefault();
    notify.addClass('animate-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      notifyClose.addClass('is-scaled-up');
    });
  });

  // Notify Form Open - Menu
  notifyTriggerMenu.on('click', function(event){
    event.preventDefault();
    notify.addClass('animate-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      notifyClose.addClass('is-scaled-up');
    });
  });

  // Notify Form Close
  notifyClose.on('click', function(event){
    event.preventDefault();
    notifyClose.removeClass('is-scaled-up');
    setTimeout(function(){
      notify.addClass('animate-out');
    }, 300);
    setTimeout(function(){
      notify.removeClass('animate-in animate-out');
    }, 1600);
  });

  projectTrigger1.on('click', function(event){
    event.preventDefault();
    project1.addClass('animate-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      projectClose1.addClass('is-scaled-up');
    });
  });

  projectClose1.on('click', function(event){
    event.preventDefault();
    projectClose1.removeClass('is-scaled-up');
    setTimeout(function(){
      project1.addClass('animate-out');
    }, 300);
    setTimeout(function(){
      project1.removeClass('animate-in animate-out');
    }, 1600);
  });

  projectTrigger2.on('click', function(event){
    event.preventDefault();
    project2.addClass('animate-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      projectClose2.addClass('is-scaled-up');
    });
  });

  projectClose2.on('click', function(event){
    event.preventDefault();
    projectClose2.removeClass('is-scaled-up');
    setTimeout(function(){
      project2.addClass('animate-out');
    }, 300);
    setTimeout(function(){
      project2.removeClass('animate-in animate-out');
    }, 1600);
  });

  projectTrigger3.on('click', function(event){
    event.preventDefault();
    project3.addClass('animate-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      projectClose3.addClass('is-scaled-up');
    });
  });

  projectClose3.on('click', function(event){
    event.preventDefault();
    projectClose3.removeClass('is-scaled-up');
    setTimeout(function(){
      project3.addClass('animate-out');
    }, 300);
    setTimeout(function(){
      project3.removeClass('animate-in animate-out');
    }, 1600);
  });

  // Buttons Hover Effect
  $('.hover-white, .hover-gradient, .circle, .inner-video-trigger')
  .on('mouseenter', function(e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    $(this).find('em').css({top:relY, left:relX})
  })
  .on('mouseout', function(e) {
    var parentOffset = $(this).offset(),
      relX = e.pageX - parentOffset.left,
      relY = e.pageY - parentOffset.top;
    $(this).find('em').css({top:relY, left:relX})
  });

});
