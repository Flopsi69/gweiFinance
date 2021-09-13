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

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $($.attr(this, 'href')).offset().top - 50,
    },
    900
  );
});
