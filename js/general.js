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
//# sourceMappingURL=maps/general.js.map
