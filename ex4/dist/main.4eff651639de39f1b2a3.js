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
/******/ 	__webpack_require__.p = "";
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
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../assets/img/1.jpg":
/*!***************************!*\
  !*** ../assets/img/1.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "04acfcfa82e3e1789c431789339b20f7.jpg";

/***/ }),

/***/ "../assets/img/2.jpg":
/*!***************************!*\
  !*** ../assets/img/2.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d6d562e810b7537e536987f061d1ac37.jpg";

/***/ }),

/***/ "../assets/img/3.jpg":
/*!***************************!*\
  !*** ../assets/img/3.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "00eb72ab53bc6f65288ec3374aac8bfc.jpg";

/***/ }),

/***/ "../assets/img/4.jpg":
/*!***************************!*\
  !*** ../assets/img/4.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3af5db8c420bf2708ffdb92eeb2878aa.jpg";

/***/ }),

/***/ "../assets/img/5.jpg":
/*!***************************!*\
  !*** ../assets/img/5.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc54873a77978df866cb07e0792c5c35.jpg";

/***/ }),

/***/ "../assets/img/6.jpg":
/*!***************************!*\
  !*** ../assets/img/6.jpg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4485bab23289e962211cc4e88ddce411.jpg";

/***/ }),

/***/ "./css/style.css":
/*!***********************!*\
  !*** ./css/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./css/style.css");
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/img/1.jpg */ "../assets/img/1.jpg");
/* harmony import */ var _assets_img_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/img/2.jpg */ "../assets/img/2.jpg");
/* harmony import */ var _assets_img_2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @assets/img/3.jpg */ "../assets/img/3.jpg");
/* harmony import */ var _assets_img_3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_3_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_img_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/img/4.jpg */ "../assets/img/4.jpg");
/* harmony import */ var _assets_img_4_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_img_4_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_img_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @assets/img/5.jpg */ "../assets/img/5.jpg");
/* harmony import */ var _assets_img_5_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_img_5_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_img_6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @assets/img/6.jpg */ "../assets/img/6.jpg");
/* harmony import */ var _assets_img_6_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_img_6_jpg__WEBPACK_IMPORTED_MODULE_7__);
//Choose a random color

/* eslint-env es6 */

/* eslint-disable no-console */








var buttonPrev = document.querySelector('#buttonPrev');
var buttonNext = document.querySelector('#buttonNext');
var input = document.querySelector('#slide');
var images = [_assets_img_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_img_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_img_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_img_4_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_img_5_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_img_6_jpg__WEBPACK_IMPORTED_MODULE_7___default.a];
var counter = 0;
buttonNext.addEventListener('click', next);

function next() {
  console.log('next clicked');

  if (counter < images.length) {
    jquery__WEBPACK_IMPORTED_MODULE_1__('#slide').attr('src', images[counter]);
    counter++;
  } else {
    counter = 0;
    next();
  }
}

buttonPrev.addEventListener('click', prev);

function prev() {
  console.log('prev clicked');

  if (counter > 0) {
    counter--;
    document.getElementById('slide').setAttribute('src', images[counter]);
  } else {
    counter = images.length;
    prev();
  }
}

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi @babel/polyfill @js/script.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! @js/script.js */"./js/script.js");


/***/ })

/******/ });
//# sourceMappingURL=main.4eff651639de39f1b2a3.js.map