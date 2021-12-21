import $ from 'jQuery';

const telegramOptions = {
  key: '2042305334:AAGABiuF-zLhxoGK3dK7D8zBLSaXXH0FXTc', // Ключ бота (от @botFather)
  chatId: '-549595195', // Айдишник чата куда слать сообщения
};

function sendTelegramMess(text) {
  let mess =
    'https://api.telegram.org/bot' +
    telegramOptions.key +
    '/sendMessage?chat_id=' +
    telegramOptions.chatId +
    '&text=' +
    encodeURI(text);

  fetch(mess)
    .then(function (data) {
      console.log('Уведомление отправлено!');
    })
    .catch(function (e) {
      console.log('Ошибка при отправке уведомлени:', e);
    });
}

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
  if ($.attr(this, 'href').length > 1) {
    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top - 50,
      },
      900
    );
  }
});

$('.vault-nav__item').on('click', function () {
  $(this)
    .addClass('vault-nav__item_active')
    .siblings('.vault-nav__item')
    .removeClass('vault-nav__item_active');

  $($(this).data('target'))
    .slideDown('slow')
    .addClass('vault-tab_active')
    .siblings('.vault-tab_active')
    .slideUp('slow')
    .removeClass('vault-tab_active');
});

// MODAL
function modalClose() {
  $('.modal').hasClass('modal_active')
    ? $('.modal').removeClass('modal_active')
    : $('.modal').addClass('modal_active');
  $('.modal__body').slideUp();
}

$('.modal-trigger').on('click', function (e) {
  e.preventDefault();
  let target = $(this).attr('modal-target');
  $('.modal').hasClass('modal_active')
    ? $('.modal').removeClass('modal_active')
    : $('.modal').addClass('modal_active');
  $(target).delay(200).slideDown();
});

$('.modal__close, .modal__close_new, .modal-success__close').on(
  'click',
  function (e) {
    e.preventDefault();
    modalClose();
  }
);

$('.modal').on('click', function (e) {
  if ($(e.target).hasClass('modal_active')) {
    modalClose();
  }
});

$('.subscribe__form').on('submit', function (e) {
  e.preventDefault();
  let data = {
    email: $('.subscribe__input').val(),
    referrer: document.referrer || '-',
  };
  $.ajax({
    type: 'POST',
    url: './subscribe.php',
    data,
  }).done(function (res) {
    res = JSON.parse(res);
    if (res.status == 'success') {
      sendTelegramMess(
        'New Subscribe:\r\nEmail: ' +
          data.email +
          '\r\nReferrer: ' +
          data.referrer +
          '\r\nIP: ' +
          res.ip
      );
      $('.subscribe__form')[0].reset();
      $('.modal').addClass('modal_active');
      $('#success').delay(200).slideDown();
    } else {
      console.log('Something wrong! Try later..');
    }
  });
});

$('.provide__form').on('submit', function (e) {
  e.preventDefault();
  let data = {
    email: $('#provideEmail').val(),
    wallet: $('#provideWallet').val(),
    referrer: document.referrer || '-',
  };
  $.ajax({
    type: 'POST',
    url: './provideWallet.php',
    data,
  }).done(function (res) {
    res = JSON.parse(res);
    if (res.status == 'success') {
      sendTelegramMess(
        'New Wallet:\r\nEmail: ' +
          data.email +
          '\r\nWallet: ' +
          data.wallet +
          '\r\nReferrer: ' +
          data.referrer +
          '\r\nIP: ' +
          res.ip
      );
      $('.provide__title')
        .html(
          'You have successfully entered the draw. </br> <span>Goodluck ^_^</span>'
        )
        .addClass('modal__title_single');
      $('.provide__form').remove();
    } else {
      console.log('Something wrong! Try later..');
    }
  });
});

// Fake
$('.modal-wallet__item').on('click', function () {
  $('.modal-wallet').slideToggle(function () {
    $('#action-success').delay(200).slideDown();
  });
  $('.header-connect').remove();
  $('.header-connected').addClass('header-connected_active');
});

$('.vault-compare__item').on('click', function () {
  $(this)
    .addClass('vault-compare__item_active')
    .siblings('.vault-compare__item_active')
    .removeClass('vault-compare__item_active');
});
