/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	angular.module('offlineFirst', ['ngMaterial']);

	// require all the app scripts
	const req = __webpack_require__(1);
	req.keys().forEach((key) => req(key));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./components/banks.js": 2,
		"./services/banks.js": 3
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 1;


/***/ },
/* 2 */
/***/ function(module, exports) {

	angular
	  .module('offlineFirst')
	  .component('banksList', {
	    templateUrl: 'templates/banks-listing.html',
	    controller: ['BanksService', function PhoneListController(BanksService) {
	      BanksService.get().then((banks) => {
	        this.banks = banks;
	      });
	    }],
	  });


/***/ },
/* 3 */
/***/ function(module, exports) {

	angular
	  .module('offlineFirst')
	  .factory('BanksService', ['$http', function($http) {
	     var banks = [];
	     var get = function() {
	       return $http.get('/banks').then((res) => {
	         return res.data.banks.slice(30, 40);
	       });
	     };

	     return {
	       get,
	     };
	   }]);


/***/ }
/******/ ]);