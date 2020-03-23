webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Note.js":
/*!**********************************!*\
  !*** ./pages/components/Note.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/sandmanpwnz/Projects/nextjs-todo-app/pages/components/Note.js";


var Note = function Note(_ref) {
  var deleteMethod = _ref.deleteMethod,
      toggleMethod = _ref.toggleMethod,
      text = _ref.text,
      completed = _ref.completed;
  var classString = completed ? 'note completed' : 'note';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classString,
    onClick: toggleMethod,
    onDoubleClick: deleteMethod,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Edit"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Done"));
};

/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ })

})
//# sourceMappingURL=index.js.f8a56a679f4e60e0c31c.hot-update.js.map