/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/game.js */ \"./src/game.js\");\n/* harmony import */ var _src_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/view.js */ \"./src/view.js\");\n\n\nvar root = document.querySelector('#root');\nvar game = new _src_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar view = new _src_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](root, 320, 640, 20, 10);\nwindow.game = game;\nwindow.view = view;\nview.renderPlayField(game.playfield);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    _defineProperty(this, \"score\", 0);\n\n    _defineProperty(this, \"lines\", 0);\n\n    _defineProperty(this, \"level\", 0);\n\n    _defineProperty(this, \"playfield\", [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 1, 1, 1, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);\n\n    _defineProperty(this, \"activePiece\", {\n      x: 0,\n      y: 0,\n      blocks: [[0, 1, 0], [1, 1, 1], [0, 0, 0]]\n    });\n  }\n\n  _createClass(Game, [{\n    key: \"movePieceLeft\",\n    value: function movePieceLeft() {\n      this.activePiece.x -= 1;\n\n      if (this.hasCollision()) {\n        this.activePiece.x += 1;\n      }\n    }\n  }, {\n    key: \"movePieceRight\",\n    value: function movePieceRight() {\n      this.activePiece.x += 1;\n\n      if (this.hasCollision()) {\n        this.activePiece.x -= 1;\n      }\n    }\n  }, {\n    key: \"movePieceDown\",\n    value: function movePieceDown() {\n      this.activePiece.y += 1;\n\n      if (this.hasCollision()) {\n        this.activePiece.y -= 1;\n        this.lockPiece();\n      }\n    }\n  }, {\n    key: \"rotatePiece\",\n    value: function rotatePiece() {\n      var blocks = this.activePiece.blocks;\n      var length = blocks.length;\n      var temp = [];\n\n      for (var i = 0; i < length; i++) {\n        temp[i] = new Array(length).fill(0);\n      }\n\n      for (var y = 0; y < length; y++) {\n        for (var x = 0; x < length; x++) {\n          temp[x][y] = blocks[length - 1 - y][x];\n        }\n      }\n\n      this.activePiece.blocks = temp;\n\n      if (this.hasCollision()) {\n        this.activePiece.blocks = blocks;\n      }\n    }\n  }, {\n    key: \"hasCollision\",\n    value: function hasCollision() {\n      var _this$activePiece = this.activePiece,\n          pieceY = _this$activePiece.y,\n          pieceX = _this$activePiece.x,\n          blocks = _this$activePiece.blocks;\n\n      for (var y = 0; y < blocks.length; y++) {\n        for (var x = 0; x < blocks[y].length; x++) {\n          if (blocks[y][x] && (this.playfield[pieceY + y] === undefined || this.playfield[pieceX + x] === undefined || this.playfield[pieceY + y][pieceX + x])) {\n            return true;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"lockPiece\",\n    value: function lockPiece() {\n      var activePiece = this.activePiece;\n      var blocks = this.activePiece.blocks;\n\n      for (var y = 0; y < blocks.length; y++) {\n        for (var x = 0; x < blocks[y].length; x++) {\n          if (blocks[y][x]) {\n            this.playfield[activePiece.y + y][activePiece.x + x] = activePiece.blocks[y][x];\n          }\n        }\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar View =\n/*#__PURE__*/\nfunction () {\n  function View(element, width, height, rows, columns) {\n    _classCallCheck(this, View);\n\n    this.element = element;\n    this.width = width;\n    this.height = height;\n    this.canvas = document.createElement('canvas');\n    this.canvas.width = this.width;\n    this.canvas.height = this.height;\n    this.context = this.canvas.getContext('2d');\n    this.blockWidth = this.width / columns;\n    this.blockHeigth = this.height / rows;\n    this.element.appendChild(this.canvas);\n  }\n\n  _createClass(View, [{\n    key: \"renderPlayField\",\n    value: function renderPlayField(playfield) {\n      for (var y = 0; y < playfield.length; y++) {\n        var line = playfield[y];\n\n        for (var x = 0; x < line.length; x++) {\n          var block = line[x];\n\n          if (block) {\n            this.context.fillStyle = 'red';\n            this.context.strokeStyle = 'black';\n            this.context.lineWidth = 2;\n            this.context.fillRect(x * this.blockWidth, y * this.blockHeigth, this.blockWidth, this.blockHeigth);\n          }\n        }\n      }\n    }\n  }]);\n\n  return View;\n}();\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });