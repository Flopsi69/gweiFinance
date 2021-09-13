import $ from 'jQuery';

$('.faq__item-title').on('click', function () {
  $(this)
    .siblings('.faq__item-descr')
    .slideToggle()
    .parent()
    .toggleClass('faq__item_active');
});

$('.burger').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('burger_active');
  $('.header__navbar').slideToggle();
});

$(document).on('click', '.header__nav a', function (event) {
  event.preventDefault();
  let scrollTop = 0;

  if ($.attr(this, 'href') == '#home') {
    scrollTop = 0;
  } else {
    scrollTop = $($.attr(this, 'href')).offset().top - 50;
  }

  $('html, body').animate(
    {
      scrollTop: scrollTop,
    },
    900
  );
});
