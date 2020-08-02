"use strict";

$(".menu__button").on("click", function () {
  $(".menu__inner").fadeIn();
});
$(".menu__close").on("click", function () {
  $(".menu__inner").fadeOut();
});
$("input[type=tel]").mask("+7(999) 999-99-99");
$(".product-card__control--min").click(function () {
  var $input = $(this).parent().find("input");
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$(".product-card__control--max").click(function () {
  var $input = $(this).parent().find("input");
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});
$(".product__control--min").click(function () {
  var $input = $(this).parent().find("input");
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$(".product__control--max").click(function () {
  var $input = $(this).parent().find("input");
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});
$(".slider__list").slick({
  prevArrow: ".slider__control--prev",
  nextArrow: ".slider__control--next",
  dots: false
});

if ($(window).width() < 1200) {
  $(".panel__catalog").on("click", function (evt) {
    evt.preventDefault();
    $(".sidebar").fadeIn();
  });
  $(".sidebar__close").on("click", function () {
    $(".sidebar").fadeOut();
  });
}

if ($(window).width() >= 768) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 39) {
      $(".header__cart").addClass("header__cart--fixed");
    } else {
      $(".header__cart").removeClass("header__cart--fixed");
    }
  });
}

$('.text__gallery .gallery__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: false,
  infinite: true,
  adaptiveHeight: true,
  asNavFor: '.text__gallery .gallery__sub-list',
  responsive: [{
    breakpoint: 1199,
    settings: {
      dots: true
    }
  }]
});
$('.text__gallery .gallery__sub-list').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.text__gallery .gallery__list',
  dots: false,
  centerMode: false,
  infinite: true,
  focusOnSelect: true,
  arrows: true,
  prevArrow: ".text__gallery .gallery__control--prev",
  nextArrow: ".text__gallery .gallery__control--next"
});
$('.product__gallery .gallery__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: false,
  infinite: true,
  adaptiveHeight: true,
  asNavFor: '.product__gallery .gallery__sub-list',
  responsive: [{
    breakpoint: 1199,
    settings: {
      dots: true
    }
  }]
});
$('.product__gallery .gallery__sub-list').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product__gallery .gallery__list',
  dots: false,
  centerMode: false,
  infinite: true,
  focusOnSelect: true,
  arrows: true,
  prevArrow: ".product__gallery .gallery__control--prev",
  nextArrow: ".product__gallery .gallery__control--next"
});
var tabs = document.querySelectorAll("[data-tab]");
var tabsContent = document.querySelectorAll("[data-content]");

var showTab = function showTab(arrTab, arrContent, dataTab, dataContent) {
  arrTab.forEach(function (item) {
    item.addEventListener("click", function () {
      for (var index = 0; index < arrTab.length; index++) {
        arrTab[index].classList.remove("tabs__control--active");
      }

      item.classList.add("tabs__control--active");
      var tabID = item.getAttribute(dataTab);

      for (var o = 0; o < arrContent.length; o++) {
        arrContent[o].classList.remove("tabs__content--show");
        var contentID = arrContent[o].getAttribute(dataContent);

        if (tabID === contentID) {
          arrContent[o].classList.add("tabs__content--show");
        }
      }
    });
  });
};

showTab(tabs, tabsContent, "data-tab", "data-content");
//# sourceMappingURL=maps/general.js.map
