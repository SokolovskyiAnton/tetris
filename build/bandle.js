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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/game.js */ \"./src/game.js\");\n/* harmony import */ var _src_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/view.js */ \"./src/view.js\");\n\n\nvar root = document.querySelector('#root');\nvar game = new _src_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nvar view = new _src_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](root, 480, 640, 20, 10);\nwindow.game = game;\nwindow.view = view;\ndocument.addEventListener('keydown', function (event) {\n  switch (event.keyCode) {\n    case 37:\n      game.movePieceLeft();\n      view.render(game.getState());\n      break;\n\n    case 38:\n      game.rotatePiece();\n      view.render(game.getState());\n      break;\n\n    case 39:\n      game.movePieceRight();\n      view.render(game.getState());\n      break;\n\n    case 40:\n      game.movePieceDown();\n      view.render(game.getState());\n      break;\n  }\n});\nview.renderEndScreen(game.getState());\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Game =\n/*#__PURE__*/\nfunction () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    _defineProperty(this, \"score\", 0);\n\n    _defineProperty(this, \"lines\", 0);\n\n    _defineProperty(this, \"playfield\", this.createPlayField());\n\n    _defineProperty(this, \"activePiece\", this.createPiece());\n\n    _defineProperty(this, \"nextPiece\", this.createPiece());\n  }\n\n  _createClass(Game, [{\n    key: \"getState\",\n    value: function getState() {\n      var playfield = this.createPlayField();\n      var _this$activePiece = this.activePiece,\n          pieceY = _this$activePiece.y,\n          pieceX = _this$activePiece.x,\n          blocks = _this$activePiece.blocks;\n\n      for (var y = 0; y < this.playfield.length; y++) {\n        playfield[y] = [];\n\n        for (var x = 0; x < this.playfield[y].length; x++) {\n          playfield[y][x] = this.playfield[y][x];\n        }\n      }\n\n      for (var _y = 0; _y < blocks.length; _y++) {\n        for (var _x = 0; _x < blocks[_y].length; _x++) {\n          if (blocks[_y][_x]) {\n            playfield[pieceY + _y][pieceX + _x] = blocks[_y][_x];\n          }\n        }\n      }\n\n      return {\n        score: this.score,\n        level: this.level,\n        lines: this.lines,\n        nextPiece: this.nextPiece,\n        playfield: playfield\n      };\n    }\n  }, {\n    key: \"createPlayField\",\n    value: function createPlayField() {\n      var playfield = [];\n\n      for (var y = 0; y < 20; y++) {\n        playfield[y] = [];\n\n        for (var x = 0; x < 10; x++) {\n          playfield[y][x] = 0;\n        }\n      }\n\n      return playfield;\n    }\n  }, {\n    key: \"createPiece\",\n    value: function createPiece() {\n      var index = Math.floor(Math.random() * 7);\n      var type = 'IJLOSTZ'[index];\n      var piece = {};\n\n      switch (type) {\n        case 'I':\n          piece.blocks = [[0, 0, 0, 0], [1, 1, 1, 1], [0, 0, 0, 0], [0, 0, 0, 0]];\n          break;\n\n        case 'J':\n          piece.blocks = [[0, 0, 0], [2, 2, 2], [0, 0, 2]];\n          break;\n\n        case 'L':\n          piece.blocks = [[0, 0, 0], [3, 3, 3], [3, 0, 0]];\n          break;\n\n        case 'O':\n          piece.blocks = [[0, 0, 0, 0], [0, 4, 4, 0], [0, 4, 4, 0], [0, 0, 0, 0]];\n          break;\n\n        case 'S':\n          piece.blocks = [[0, 0, 0], [0, 5, 5], [5, 5, 0]];\n          break;\n\n        case 'T':\n          piece.blocks = [[0, 0, 0], [6, 6, 6], [0, 6, 0]];\n          break;\n\n        case 'Z':\n          piece.blocks = [[0, 0, 0], [7, 7, 0], [0, 7, 7]];\n          break;\n\n        default:\n          throw new Error('Not found');\n      }\n\n      piece.x = Math.floor((10 - piece.blocks[0].length) / 2);\n      piece.y = -1;\n      return piece;\n    }\n  }, {\n    key: \"movePieceLeft\",\n    value: function movePieceLeft() {\n      this.activePiece.x -= 1;\n\n      if (this.hasCollision()) {\n        this.activePiece.x += 1;\n      }\n    }\n  }, {\n    key: \"movePieceRight\",\n    value: function movePieceRight() {\n      this.activePiece.x += 1;\n\n      if (this.hasCollision()) {\n        this.activePiece.x -= 1;\n      }\n    }\n  }, {\n    key: \"movePieceDown\",\n    value: function movePieceDown() {\n      this.activePiece.y += 1;\n\n      if (this.hasCollision()) {\n        this.activePiece.y -= 1;\n        this.lockPiece();\n        var clearedLines = this.clearLines();\n        this.updateScore(clearedLines);\n        this.updatePieces();\n      }\n    }\n  }, {\n    key: \"rotatePiece\",\n    value: function rotatePiece() {\n      var blocks = this.activePiece.blocks;\n      var length = blocks.length;\n      var temp = [];\n\n      for (var i = 0; i < length; i++) {\n        temp[i] = new Array(length).fill(0);\n      }\n\n      for (var y = 0; y < length; y++) {\n        for (var x = 0; x < length; x++) {\n          temp[x][y] = blocks[length - 1 - y][x];\n        }\n      }\n\n      this.activePiece.blocks = temp;\n\n      if (this.hasCollision()) {\n        this.activePiece.blocks = blocks;\n      }\n    }\n  }, {\n    key: \"hasCollision\",\n    value: function hasCollision() {\n      var _this$activePiece2 = this.activePiece,\n          pieceY = _this$activePiece2.y,\n          pieceX = _this$activePiece2.x,\n          blocks = _this$activePiece2.blocks;\n\n      for (var y = 0; y < blocks.length; y++) {\n        for (var x = 0; x < blocks[y].length; x++) {\n          if (blocks[y][x] && (this.playfield[pieceY + y] === undefined || this.playfield[pieceY + y][pieceX + x] === undefined || this.playfield[pieceY + y][pieceX + x])) {\n            return true;\n          }\n        }\n      }\n    }\n  }, {\n    key: \"lockPiece\",\n    value: function lockPiece() {\n      var activePiece = this.activePiece;\n      var blocks = this.activePiece.blocks;\n\n      for (var y = 0; y < blocks.length; y++) {\n        for (var x = 0; x < blocks[y].length; x++) {\n          if (blocks[y][x]) {\n            this.playfield[activePiece.y + y][activePiece.x + x] = activePiece.blocks[y][x];\n          }\n        }\n      }\n    }\n  }, {\n    key: \"clearLines\",\n    value: function clearLines() {\n      var rows = 20;\n      var columns = 10;\n      var lines = [];\n\n      for (var y = rows - 1; y >= 0; y--) {\n        var numberOfBlocks = 0;\n\n        for (var x = 0; x < columns; x++) {\n          if (this.playfield[y][x]) {\n            numberOfBlocks += 1;\n          }\n        }\n\n        if (numberOfBlocks === 0) {\n          break;\n        } else if (numberOfBlocks < columns) {\n          continue;\n        } else if (numberOfBlocks === columns) {\n          lines.unshift(y);\n        }\n      }\n\n      for (var _i = 0, _lines = lines; _i < _lines.length; _i++) {\n        var index = _lines[_i];\n        this.playfield.splice(index, 1);\n        this.playfield.unshift(new Array(columns).fill(0));\n      }\n\n      return lines.length;\n    }\n  }, {\n    key: \"updateScore\",\n    value: function updateScore(clearedLines) {\n      if (clearedLines > 0) {\n        this.score += Game.points[clearedLines] * (this.level + 1);\n        this.lines += clearedLines;\n      }\n    }\n  }, {\n    key: \"updatePieces\",\n    value: function updatePieces() {\n      this.activePiece = this.nextPiece;\n      this.nextPiece = this.createPiece();\n    }\n  }, {\n    key: \"level\",\n    get: function get() {\n      return Math.floor(this.lines * 0.1);\n    }\n  }]);\n\n  return Game;\n}();\n\n_defineProperty(Game, \"points\", {\n  '1': 40,\n  '2': 80,\n  '3': 160,\n  '4': 320,\n  '5': 640\n});\n\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar View =\n/*#__PURE__*/\nfunction () {\n  function View(element, width, height, rows, columns) {\n    _classCallCheck(this, View);\n\n    this.element = element;\n    this.width = width;\n    this.height = height;\n    this.canvas = document.createElement('canvas');\n    this.canvas.width = this.width;\n    this.canvas.height = this.height;\n    this.context = this.canvas.getContext('2d');\n    this.playFieledBorderWidth = 4;\n    this.playfieldX = this.playFieledBorderWidth;\n    this.playfieldY = this.playFieledBorderWidth;\n    this.playfieldWidth = this.width * 2 / 3;\n    this.playfieldHeight = this.height;\n    this.playfieldInnerWidth = this.playfieldWidth - this.playFieledBorderWidth * 2;\n    this.playfieldInnerHeigth = this.playfieldHeight - this.playFieledBorderWidth * 2;\n    this.blockWidth = this.playfieldInnerWidth / columns;\n    this.blockHeigth = this.playfieldInnerHeigth / rows;\n    this.panelX = this.playfieldWidth + 10;\n    this.panelY = 0;\n    this.panelWidth = this.width / 3;\n    this.panelHeigth = this.height;\n    this.element.appendChild(this.canvas);\n  }\n\n  _createClass(View, [{\n    key: \"render\",\n    value: function render(state) {\n      this.clearScreen();\n      this.renderPlayField(state);\n      this.renderPanel(state);\n    }\n  }, {\n    key: \"clearScreen\",\n    value: function clearScreen() {\n      this.context.clearRect(0, 0, this.width, this.height);\n    }\n  }, {\n    key: \"renderStartScreen\",\n    value: function renderStartScreen() {\n      this.context.fillStyle = 'white';\n      this.context.font = '18px \"Time New Roman\"';\n      this.context.textAlign = 'center';\n      this.context.textBaseline = 'middle';\n      this.context.fillText('Press ENTER to start', this.width / 2, this.height / 2);\n    }\n  }, {\n    key: \"renderPauseScreen\",\n    value: function renderPauseScreen() {\n      this.context.fillStyle = 'rgba(0,0,0,0.75)';\n      this.context.fillRect(0, 0, this.width, this.height);\n      this.context.fillStyle = 'white';\n      this.context.font = '18px \"Time New Roman\"';\n      this.context.textAlign = 'center';\n      this.context.textBaseline = 'middle';\n      this.context.fillText('Press ENTER to start', this.width / 2, this.height / 2);\n    }\n  }, {\n    key: \"renderEndScreen\",\n    value: function renderEndScreen(_ref) {\n      var score = _ref.score;\n      this.clearScreen();\n      this.context.fillStyle = 'white';\n      this.context.font = '18px \"Time New Roman\"';\n      this.context.textAlign = 'center';\n      this.context.textBaseline = 'middle';\n      this.context.fillText('Game Over', this.width / 2, this.height / 2 - 48);\n      this.context.fillText(\"Score: \".concat(score), this.width / 2, this.height / 2);\n      this.context.fillText('Press F5 to continue', this.width / 2, this.height / 2 + 48);\n    }\n  }, {\n    key: \"renderPlayField\",\n    value: function renderPlayField(_ref2) {\n      var playfield = _ref2.playfield;\n\n      for (var y = 0; y < playfield.length; y++) {\n        var line = playfield[y];\n\n        for (var x = 0; x < line.length; x++) {\n          var block = line[x];\n\n          if (block) {\n            this.renderBlock(this.playfieldX + x * this.blockWidth, this.playfieldY + y * this.blockHeigth, this.blockWidth, this.blockHeigth, View.colors[block]);\n          }\n        }\n      }\n\n      this.context.strokeStyle = 'white';\n      this.context.lineWidth = this.playFieledBorderWidth;\n      this.context.strokeRect(0, 0, this.playfieldWidth, this.playfieldHeight);\n    }\n  }, {\n    key: \"renderPanel\",\n    value: function renderPanel(_ref3) {\n      var level = _ref3.level,\n          score = _ref3.score,\n          lines = _ref3.lines,\n          nextPiece = _ref3.nextPiece;\n      this.context.textAlign = 'start';\n      this.context.textBaseline = 'top';\n      this.context.fillStyle = 'white';\n      this.context.font = '18px \"Time New Roman\"';\n      this.context.fillText(\"Score: \".concat(score), this.panelX, this.panelY + 0);\n      this.context.fillText(\"Lines: \".concat(lines), this.panelX, this.panelY + 24);\n      this.context.fillText(\"Level: \".concat(level), this.panelX, this.panelY + 48);\n      this.context.fillText('Next', this.panelX, this.panelY + 96);\n\n      for (var y = 0; y < nextPiece.blocks.length; y++) {\n        for (var x = 0; x < nextPiece.blocks[y].length; x++) {\n          var block = nextPiece.blocks[y][x];\n\n          if (block) {\n            this.renderBlock(this.panelX + x * this.blockWidth * 0.5, this.panelY + 120 + y * this.blockHeigth * 0.5, this.blockWidth * 0.5, this.blockHeigth * 0.5, View.colors[block]);\n          }\n        }\n      }\n    }\n  }, {\n    key: \"renderBlock\",\n    value: function renderBlock(x, y, width, heigth, color) {\n      this.context.fillStyle = color;\n      this.context.strokeStyle = 'black';\n      this.context.lineWidth = 2;\n      this.context.fillRect(x, y, width, heigth);\n      this.context.strokeRect(x, y, width, heigth);\n    }\n  }]);\n\n  return View;\n}();\n\n_defineProperty(View, \"colors\", {\n  '1': 'cyan',\n  '2': 'blue',\n  '3': 'orange',\n  '4': 'yellow',\n  '5': 'green',\n  '6': 'purple',\n  '7': 'red'\n});\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });