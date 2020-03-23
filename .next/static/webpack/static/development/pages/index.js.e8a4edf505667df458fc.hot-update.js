webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/TodoForm.js":
/*!**************************************!*\
  !*** ./pages/components/TodoForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../queries */ "./queries/index.js");

var _jsxFileName = "/home/sandmanpwnz/Projects/nextjs-todo-app/pages/components/TodoForm.js";




var TodoForm = function TodoForm() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      todoText = _useState2[0],
      setTodoText = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      errorText = _useState4[0],
      setErrorText = _useState4[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_queries__WEBPACK_IMPORTED_MODULE_3__["ADD_TODO"]),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      createTodo = _useMutation2[0],
      mutationState = _useMutation2[1];

  var errorClass = errorText ? 'message error' : 'message';
  var inputRef;

  var handleKeyPress = function handleKeyPress() {
    if (event.key === 'Enter') {
      if (!todoText) {
        setErrorText('No empty values!!');
        return;
      }

      createTodo({
        variables: {
          data: {
            title: todoText
          }
        }
      });
      setErrorText('');
      setTodoText('');
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, errorText && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: errorClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, errorText), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    placeholder: "Enter Notes",
    type: "text",
    className: "input",
    ref: function ref(input) {
      inputRef = input;
    },
    value: todoText,
    onChange: function onChange(event) {
      return setTodoText(event.target.value);
    },
    onKeyPress: handleKeyPress,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "button",
    onClick: function onClick() {
      return createTodo({
        variables: {
          data: {
            title: todoText
          }
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "+"));
};

/* harmony default export */ __webpack_exports__["default"] = (TodoForm);

/***/ })

})
//# sourceMappingURL=index.js.e8a4edf505667df458fc.hot-update.js.map