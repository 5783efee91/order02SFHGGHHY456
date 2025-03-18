$(document).ready(function () {
  "use strict";

  // Preloader js
  $("body").scrollspy({ target: ".edu-navbar" });
  $(window).on("load", function (e) {
    // setTimeout(function(){
    //   $("#status").fadeOut("slow");
    //   $("#preloader").delay(350).fadeOut("slow");
    //   $("body").delay(350).css({ overflow: "visible" });
    // }, 2000);
    
  });

  //  Mean Menu
  jQuery("header .main-menu").meanmenu({
    meanScreenWidth: "991",
  });

  //  Scroll to top
  jQuery(".to-top").on("click", function (event) {
    jQuery("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 100) {
      jQuery(".to-top").fadeIn(1000);
    } else {
      jQuery(".to-top").fadeOut(1000);
    }
  });

  //   Testimonial Slider
  $("#testimonial-slider").owlCarousel({
    navigationText: [
      "<i class='flaticon-angle-pointing-to-left'></i>",
      "<i class='flaticon-angle-arrow-pointing-to-right'></i>",
    ],
    items: 3,
    loop: true,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsMobile: [479, 1],
    slideSpeed: 1500,
    paginationSpeed: 1500,
    navigation: true,
    pagination: false,
    afterAction: function (el) {
      //remove class active
      this.$owlItems.removeClass("active");

      //add class active
      this.$owlItems //owl internal $ object containing items
        .eq(this.currentItem + 1)
        .addClass("active");
    },
  });
  //   Testimonial Slider
  $("#testimonial_slider_2").owlCarousel({
    navigationText: [
      "<i class='flaticon-angle-pointing-to-left'></i>",
      "<i class='flaticon-angle-arrow-pointing-to-right'></i>",
    ],
    items: 2,
    itemsDesktop: [1199, 2],
    itemsDesktopSmall: [980, 2],
    itemsTablet: [768, 1],
    itemsMobile: [479, 1],
    slideSpeed: 1500,
    paginationSpeed: 1500,
    navigation: true,
    pagination: false,
  });

  //   Testimonial Slider
  $("#testimonial_slider_1").owlCarousel({
    navigationText: [
      "<i class='flaticon-angle-pointing-to-left'></i>",
      "<i class='flaticon-angle-arrow-pointing-to-right'></i>",
    ],
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsMobile: [479, 1],
    slideSpeed: 1500,
    paginationSpeed: 1500,
    navigation: true,
    pagination: false,
  });

  //   Testimonial Slider
  $(".blog-slider").owlCarousel({
    navigationText: [
      "<i class='flaticon-angle-pointing-to-left'></i>",
      "<i class='flaticon-angle-arrow-pointing-to-right'></i>",
    ],
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    itemsMobile: [479, 1],
    slideSpeed: 1500,
    paginationSpeed: 1500,
    navigation: true,
    pagination: false,
  });

  //   Video Popup
  $(".video-iframe").magnificPopup({
    type: "iframe",
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "http://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
      srcAction: "iframe_src",
    },
  });

  //   Smoth scroll
  $(".myBtn").on("click", function (event) {
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1500,
        function () {
          window.location.hash = hash;
        }
      );
    } // End if
  });

  //  Scroll to top
  jQuery(".to-top").on("click", function (event) {
    jQuery("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
  jQuery(window).scroll(function () {
    if (jQuery(window).scrollTop() > 100) {
      jQuery(".to-top").fadeIn(1000);
    } else {
      jQuery(".to-top").fadeOut(1000);
    }
  });
});

function dateFtt(fmt, date) {
  //author: meizz
  var o = {
    "M+": date.getMonth() + 1, //鏈堜唤
    "d+": date.getDate(), //鏃�
    "h+": date.getHours(), //灏忔椂
    "m+": date.getMinutes(), //鍒�
    "s+": date.getSeconds(), //绉�
    "q+": Math.floor((date.getMonth() + 3) / 3), //瀛ｅ害
    S: date.getMilliseconds(), //姣
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
}
function crtTimeFtt(crtTime) {
  return dateFtt("yyyy-MM-dd hh:mm:ss", crtTime); //鐩存帴璋冪敤鍏叡JS閲岄潰鐨勬椂闂寸被澶勭悊鐨勫姙娉�
}
function getLocalTime(i) {
  if (typeof i !== "number") {
    return new Date();
  }
  var d = new Date();
  var len = d.getTime();
  var offset = d.getTimezoneOffset() * 60000;
  var utcTime = len + offset;
  return new Date(utcTime + 3600000 * i);
}
function makeShortAddress(acc) {
  return acc.slice(0, 4) + "*****" + acc.slice(-4);
}
function makeMediumAddress(acc) {
  return acc.slice(0, 6) + "*****" + acc.slice(-6);
}