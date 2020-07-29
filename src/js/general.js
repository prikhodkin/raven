$(`.menu__button`).on(`click`, () => {
  $(`.menu__inner`).fadeIn();
});

$(`.menu__close`).on(`click`, () => {
  $(`.menu__inner`).fadeOut();
});

$(`.panel__catalog`).on(`click`, () => {
  $(`.sidebar`).fadeIn();
});

$(`.sidebar__close`).on(`click`, () => {
  $(`.sidebar`).fadeOut();
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
