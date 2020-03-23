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
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../queries */ "./queries/index.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");

var _jsxFileName = "/home/sandmanpwnz/Projects/nextjs-todo-app/pages/components/Note.js";




var updateAfterDeleteMutation = function updateAfterDeleteMutation(cache, _ref) {
  var data = _ref.data;
  ;

  (function (cache, data) {
    var _cache$readQuery = cache.readQuery({
      query: GET_TODOS
    }),
        todoes = _cache$readQuery.todoes;

    cache.writeQuery({
      query: GET_TODOS,
      data: {
        todoes: todoes.filter(function (todo) {
          return todo.id !== data.deleteTodo.id;
        })
      }
    });
  })(cache, data);
};

var Note = function Note(_ref2) {
  var deleteMethod = _ref2.deleteMethod,
      toggleMethod = _ref2.toggleMethod,
      updateMethod = _ref2.updateMethod,
      text = _ref2.text,
      completed = _ref2.completed;
  var inputRef;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      editable = _useState2[0],
      setEditable = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(text),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(DELETE_TODO, {
    update: updateAfterDeleteMutation
  }),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      deleteTodo = _useMutation2[0];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(TOGGLE_TODO),
      _useMutation4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation3, 1),
      toggleTodo = _useMutation4[0];

  var _useMutation5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_queries__WEBPACK_IMPORTED_MODULE_2__["UPDATE_TODO"]),
      _useMutation6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation5, 1),
      updateTodo = _useMutation6[0];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (editable) {
      inputRef.focus();
    }
  }, [editable]);

  var handleEdit = function handleEdit() {
    setEditable(!editable);
  };

  var classString = completed ? 'note completed' : 'note';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classString,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
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
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "edit",
    onClick: handleEdit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, editable ? 'Save' : 'Edit'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "done",
    onClick: function onClick() {
      return toggleMethod();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, completed ? 'Undone' : 'Done'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    className: "delete",
    onClick: function onClick() {
      return deleteMethod();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Delete"));
};

/* harmony default export */ __webpack_exports__["default"] = (Note);

/***/ })

})
//# sourceMappingURL=index.js.91f7203bae06f44ec2a7.hot-update.js.map