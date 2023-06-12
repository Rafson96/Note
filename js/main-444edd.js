/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/material-icons/iconfont/material-icons.css":
/*!*****************************************************************!*\
  !*** ./node_modules/material-icons/iconfont/material-icons.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://node/./node_modules/material-icons/iconfont/material-icons.css?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://node/./src/sass/style.scss?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var material_icons_iconfont_material_icons_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! material-icons/iconfont/material-icons.css */ \"./node_modules/material-icons/iconfont/material-icons.css\");\n/* harmony import */ var _move_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./move.js */ \"./src/js/move.js\");\n__webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\")\r\n;\r\n\r\n\r\n// initEvent()\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n\t//variabels\r\n\r\n\tconst wrappBtn = [...document.querySelectorAll('.notes__btns')]\r\n\tconst popup = document.querySelector('.notes__popup')\r\n\tconst noteTemp = document.querySelector('.template-notes')\r\n\tconst notestWrapp = document.querySelector('.notes__wrapp')\r\n\tconst noteText = document.querySelector('.notes__text')\r\n\tconst select = document.querySelector('.notes__popup-select')\r\n\tconst error = document.querySelector('.notes__popup-error')\r\n\tconst note = noteTemp.content.cloneNode(true)\r\n\tconst notes = document.getElementsByClassName('notes__wrapp-note')\r\nlet idNote = 0\r\n\r\n\t//function\r\n\r\n\tconst popupActive = visibilityValue => {\r\n\t\tpopup.style.visibility = visibilityValue\r\n\t}\r\n\r\n\tconst showError = visibilityValue => {\r\n\t\terror.style.visibility = visibilityValue\r\n\t}\r\n\r\n\tconst showErrorHidden = () => {\r\n\t\tnoteText.addEventListener('keyup', () => {\r\n\t\t\terror.style.visibility = 'hidden'\r\n\t\t})\r\n\t}\r\n\r\n\tconst removeAll = () => {\r\n\t\t;[...notes].forEach(e => e.remove())\r\n\t}\r\n\r\n\tconst setColor = (index, note) => {\r\n\t\tif (index === 1) {\r\n\t\t\tnote.style.backgroundColor = 'yellow'\r\n\t\t} else if (index === 2) {\r\n\t\t\tnote.style.backgroundColor = 'red'\r\n\t\t}\r\n\t}\r\n\r\n\tshowErrorHidden()\r\n\r\n\tconst addNote = () => {\r\n\t\tidNote++\r\n\t\tconst note = noteTemp.content.cloneNode(true)\r\n\t\tconst textNote = note.querySelector('.notes__wrapp-note-text')\r\n\t\ttextNote.textContent = noteText.value\r\n\t\tconst titleNote = select.options[select.selectedIndex].text\r\n\t\ttextNote.previousElementSibling.textContent = titleNote\r\n\t\tnotestWrapp.appendChild(note)\r\n\t\t\r\n\t\ttextNote.parentElement.setAttribute('id', idNote)\r\n\t\tpopupActive('hidden')\r\n\t\tnoteText.value = ''\r\n\t\tsetColor(select.options[select.selectedIndex].index, textNote.parentElement)\r\n\t\t\r\n\t}\r\n\r\n\twrappBtn.forEach(e =>\r\n\t\te.addEventListener('click', e => {\r\n\t\t\te.stopPropagation()\r\n\t\t\tlet btnClass = e.target.classList\r\n\t\t\tswitch (true) {\r\n\t\t\t\tcase btnClass.contains('button--remove'):\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tremoveAll()\r\n\t\t\t\t\t}\r\n\t\t\t\t\tbreak\r\n\t\t\t\tcase btnClass.contains('button--add'):\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tpopupActive('visible')\r\n\t\t\t\t\t}\r\n\t\t\t\t\tbreak\r\n\t\t\t\tcase btnClass.contains('button__popup--cancel'):\r\n\t\t\t\t\t{\r\n\t\t\t\t\t\tpopupActive('hidden')\r\n\t\t\t\t\t\tshowError('hidden')\r\n\t\t\t\t\t}\r\n\t\t\t\t\tbreak\r\n\t\t\t\tcase btnClass.contains('button__popup--add'): {\r\n\t\t\t\t\tif (noteText.value !== '') {\r\n\t\t\t\t\t\taddNote()\r\n\t\t\t\t\t\t;(0,_move_js__WEBPACK_IMPORTED_MODULE_1__.initEvent)()\r\n\t\t\t\t\t;(0,_move_js__WEBPACK_IMPORTED_MODULE_1__.closeMove)()\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tshowError('visible')\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t})\r\n\t)\r\n})\r\n\n\n//# sourceURL=webpack://node/./src/js/app.js?");

/***/ }),

/***/ "./src/js/move.js":
/*!************************!*\
  !*** ./src/js/move.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeMove\": () => (/* binding */ closeMove),\n/* harmony export */   \"initEvent\": () => (/* binding */ initEvent)\n/* harmony export */ });\nconst notes = document.getElementsByClassName('notes__wrapp-note')\r\nconst notestWrapp = document.querySelector('.notes__wrapp')\r\nlet moveActive = false\r\n\r\nconst initEvent = () => {\r\n\t;[...notes].forEach(e =>\r\n\t\te.addEventListener('mousedown', e => {\r\n\t\t\tmoveActive = !moveActive\r\n\r\n\t\t\te.target.style.position = 'absolute'\r\n\t\t\t\r\n\r\n\t\t\tmove(e.target, e.offsetY, e.offsetX)\r\n\t\t\t// if (e.target.getAttribute('id') * 1 >= 1) {\r\n\t\t\t// \tmoveActive = true\r\n\t\t\t// }\r\n\t\t\r\n\t\t})\r\n\t)\r\n}\r\n\r\nconst move = (element, noteY, noteX, y) => {\r\n\tdocument.addEventListener('mousemove', e => {\r\n\t\t\r\n\t\tif (moveActive) {\r\n\r\n\t\r\n\t\t\t\r\n\t\t\tlet clientY = e.clientY - noteY\r\n\r\n\t\t\tlet clientX = e.clientX - noteX\r\n\r\n\t\t\telement.style.top = `${clientY - 200}px`\r\n\t\t\telement.style.left = `${clientX - 50}px`\r\n\t\t\r\n\t\t}\r\n\t})\r\n}\r\n\r\nconst closeMove = () => {\r\n\tdocument.addEventListener('mouseup', () => {\r\n\t\t\r\n\t\t\r\n\t\tmoveActive = false})\r\n}\r\n\n\n//# sourceURL=webpack://node/./src/js/move.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;