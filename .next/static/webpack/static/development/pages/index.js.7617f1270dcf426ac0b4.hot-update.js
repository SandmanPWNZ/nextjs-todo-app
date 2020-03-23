webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/App/index.js":
/*!****************************!*\
  !*** ./pages/App/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../queries */ "./queries/index.js");
/* harmony import */ var _components_Note__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Note */ "./pages/components/Note.js");
/* harmony import */ var _components_TodoForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TodoForm.js */ "./pages/components/TodoForm.js");

var _jsxFileName = "/home/sandmanpwnz/Projects/nextjs-todo-app/pages/App/index.js";






var updateAfterDeleteMutation = function updateAfterDeleteMutation(cache, _ref) {
  var data = _ref.data;
  ;

  (function (cache, data) {
    var _cache$readQuery = cache.readQuery({
      query: _queries__WEBPACK_IMPORTED_MODULE_3__["GET_TODOS"]
    }),
        todos = _cache$readQuery.todos;

    debugger; // cache.writeQuery({
    //   query: GET_TODOS,
    //   data: { todos: todos.concat([createTodo]) }
    // })
  })(cache, data);
};

var App = function App() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_queries__WEBPACK_IMPORTED_MODULE_3__["GET_TODOS"]),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_queries__WEBPACK_IMPORTED_MODULE_3__["DELETE_TODO"], {
    updated: updateAfterDeleteMutation
  }),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 1),
      deleteTodo = _useMutation2[0];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_queries__WEBPACK_IMPORTED_MODULE_3__["TOGGLE_TODO"]),
      _useMutation4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation3, 1),
      toggleTodo = _useMutation4[0];

  if (loading) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, "We are loading yours todos, don't worry!");
  }

  if (error) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Oops! ", error);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, data.todoes.map(function (todo) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Note__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: todo.id,
      text: todo.title,
      completed: todo.completed,
      deleteMethod: function deleteMethod() {
        return deleteTodo({
          variables: {
            where: {
              id: todo.id
            }
          }
        });
      },
      toggleMethod: function toggleMethod() {
        return toggleTodo({
          variables: {
            data: {
              completed: !todo.completed
            },
            where: {
              id: todo.id
            }
          }
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TodoForm_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.7617f1270dcf426ac0b4.hot-update.js.map