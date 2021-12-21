/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jQuery */ "./node_modules/jQuery/dist/jquery.js");
/* harmony import */ var jQuery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jQuery__WEBPACK_IMPORTED_MODULE_0__);

var telegramOptions = {
  key: '2042305334:AAGABiuF-zLhxoGK3dK7D8zBLSaXXH0FXTc',
  // Ключ бота (от @botFather)
  chatId: '-549595195' // Айдишник чата куда слать сообщения

};

function sendTelegramMess(text) {
  var mess = 'https://api.telegram.org/bot' + telegramOptions.key + '/sendMessage?chat_id=' + telegramOptions.chatId + '&text=' + encodeURI(text);
  fetch(mess).then(function (data) {
    console.log('Уведомление отправлено!');
  })["catch"](function (e) {
    console.log('Ошибка при отправке уведомлени:', e);
  });
}

jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.faq__item-title').on('click', function () {
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('.faq__item-descr').slideToggle().parent().toggleClass('faq__item_active');
});
jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.burger').on('click', function (e) {
  e.preventDefault();
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('burger_active');
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.header__navbar').slideToggle();
});
jQuery__WEBPACK_IMPORTED_MODULE_0___default()(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  if (jQuery__WEBPACK_IMPORTED_MODULE_0___default.a.attr(this, 'href').length > 1) {
    jQuery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
      scrollTop: jQuery__WEBPACK_IMPORTED_MODULE_0___default()(jQuery__WEBPACK_IMPORTED_MODULE_0___default.a.attr(this, 'href')).offset().top - 50
    }, 900);
  }
});
jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.vault-nav__item').on('click', function () {
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('vault-nav__item_active').siblings('.vault-nav__item').removeClass('vault-nav__item_active');
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()(jQuery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('target')).slideDown('slow').addClass('vault-tab_active').siblings('.vault-tab_active').slideUp('slow').removeClass('vault-tab_active');
}); // MODAL

function modalClose() {
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal').hasClass('modal_active') ? jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal').removeClass('modal_active') : jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal').addClass('modal_active');
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal__body').slideUp();
}

jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal-trigger').on('click', function (e) {
  e.preventDefault();
  var target = jQuery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('modal-target');
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal').hasClass('modal_active') ? jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal').removeClass('modal_active') : jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal').addClass('modal_active');
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()(target).delay(200).slideDown();
});
jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal__close, .modal__close_new, .modal-success__close').on('click', function (e) {
  e.preventDefault();
  modalClose();
});
jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal').on('click', function (e) {
  if (jQuery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('modal_active')) {
    modalClose();
  }
});
jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.subscribe__form').on('submit', function (e) {
  e.preventDefault();
  var data = {
    email: jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.subscribe__input').val(),
    referrer: document.referrer || '-'
  };
  jQuery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    type: 'POST',
    url: './subscribe.php',
    data: data
  }).done(function (res) {
    res = JSON.parse(res);

    if (res.status == 'success') {
      sendTelegramMess('New Subscribe:\r\nEmail: ' + data.email + '\r\nReferrer: ' + data.referrer + '\r\nIP: ' + res.ip);
      jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.subscribe__form')[0].reset();
      jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal').addClass('modal_active');
      jQuery__WEBPACK_IMPORTED_MODULE_0___default()('#success').delay(200).slideDown();
    } else {
      console.log('Something wrong! Try later..');
    }
  });
});
jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.provide__form').on('submit', function (e) {
  e.preventDefault();
  var data = {
    email: jQuery__WEBPACK_IMPORTED_MODULE_0___default()('#provideEmail').val(),
    wallet: jQuery__WEBPACK_IMPORTED_MODULE_0___default()('#provideWallet').val(),
    referrer: document.referrer || '-'
  };
  jQuery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    type: 'POST',
    url: './provideWallet.php',
    data: data
  }).done(function (res) {
    res = JSON.parse(res);

    if (res.status == 'success') {
      sendTelegramMess('New Wallet:\r\nEmail: ' + data.email + '\r\nWallet: ' + data.wallet + '\r\nReferrer: ' + data.referrer + '\r\nIP: ' + res.ip);
      jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.provide__title').html('You have successfully entered the draw. </br> <span>Goodluck ^_^</span>').addClass('modal__title_single');
      jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.provide__form').remove();
    } else {
      console.log('Something wrong! Try later..');
    }
  });
}); // Fake

jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal-wallet__item').on('click', function () {
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.modal-wallet').slideToggle(function () {
    jQuery__WEBPACK_IMPORTED_MODULE_0___default()('#action-success').delay(200).slideDown();
  });
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.header-connect').remove();
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.header-connected').addClass('header-connected_active');
});
jQuery__WEBPACK_IMPORTED_MODULE_0___default()('.vault-compare__item').on('click', function () {
  jQuery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('vault-compare__item_active').siblings('.vault-compare__item_active').removeClass('vault-compare__item_active');
});

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map