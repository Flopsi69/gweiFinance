import $ from 'jQuery';
// import WalletConnect from '@walletconnect/client';
// import WalletConnectProvider from '@walletconnect/web3-provider';
// import Web3 from 'web3';
// import Web3Modal from 'web3modal';
// import { ethers } from 'https://cdn.ethers.io/lib/ethers-5.2.esm.min.js';

// const connector = new WalletConnect({
//   bridge: 'https://bridge.walletconnect.org', // Required
// });

// if (!connector.connected) {
//   // create new session
//   console.log('yes');
//   connector.createSession();
// }

// const webi = new Web3Modal();
// webi.connect();

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
