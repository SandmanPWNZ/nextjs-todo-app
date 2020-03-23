webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/Note.js":
/*!**********************************!*\
  !*** ./pages/components/Note.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/home/sandmanpwnz/Projects/nextjs-todo-app/pages/components/Note.js";


var Note = function Note(_ref) {
  var deleteMethod = _ref.deleteMethod,
      toggleMethod = _ref.toggleMethod,
      text = _ref.text,
      completed = _ref.completed;
  var inputRef;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      editable = _useState2[0],
      setEditable = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(text),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (editable) {
      inputRef.focus();
    }
  }, [editable]);
  var classString = completed ? 'note completed' : 'note';

  var handleEdit = function handleEdit() {
    setEditable(!editable);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classString,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    ref: function ref(input) {
      return inputRef = input;
    },
    className: editable ? 'editable' : '',
    type: "text",
    value: value,
    disabled: !editable,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "edit",
    onClick: handleEdit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, editable ? 'Save' : 'Edit'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "done",
    onClick: function onClick() {
      return toggleMethod();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, completed ? 'Undone' : 'Done'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "delete",
    onClick: function onClick() {
      return deleteMethod();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Delete"));
};

/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ })

})
//# sourceMappingURL=index.js.883e4e210911bd4459bd.hot-update.js.map