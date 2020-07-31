$(`.menu__button`).on(`click`, () => {
  $(`.menu__inner`).fadeIn();
});

$(`.menu__close`).on(`click`, () => {
  $(`.menu__inner`).fadeOut();
});

$(`input[type=tel]`).mask(`+7(999) 999-99-99`);

$(`.product-card__control--min`).click(function () {
  const $input = $(this).parent().find(`input`);
  let count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});

$(`.product-card__control--max`).click(function () {
  const $input = $(this).parent().find(`input`);
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});

$(`.slider__list`).slick({
  prevArrow: `.slider__control--prev`,
  nextArrow: `.slider__control--next`,
  dots: false
})

if($(window).width() < 1200) {
  $(`.panel__catalog`).on(`click`, (evt) => {
    evt.preventDefault();
    $(`.sidebar`).fadeIn();
  });

  $(`.sidebar__close`).on(`click`, () => {
    $(`.sidebar`).fadeOut();
  });
}

if($(window).width() >= 768) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 39) {
      $(`.header__cart`).addClass(`header__cart--fixed`);
    } else {
      $(`.header__cart`).removeClass(`header__cart--fixed`);
    }
  })
}



$('.gallery__list').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: false,
  infinite: true,
  asNavFor: '.gallery__sub-list',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        dots: true
      }
    },
  ]
});

$('.gallery__sub-list').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.gallery__list',
  dots: false,
  centerMode: false,
  infinite: true,
  focusOnSelect: true,
  arrows: true,
  prevArrow: `.gallery__control--prev`,
  nextArrow: `.gallery__control--next`,
});
