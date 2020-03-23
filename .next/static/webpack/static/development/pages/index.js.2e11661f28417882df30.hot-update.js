webpackHotUpdate("static/development/pages/index.js",{

/***/ "./queries/index.js":
/*!**************************!*\
  !*** ./queries/index.js ***!
  \**************************/
/*! exports provided: GET_TODOS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, ADD_TODO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _queries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queries */ "./queries/queries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_TODOS", function() { return _queries__WEBPACK_IMPORTED_MODULE_0__["GET_TODOS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return _queries__WEBPACK_IMPORTED_MODULE_0__["TOGGLE_TODO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TODO", function() { return _queries__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TODO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_TODO", function() { return _queries__WEBPACK_IMPORTED_MODULE_0__["DELETE_TODO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return _queries__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"]; });



/***/ }),

/***/ "./queries/queries.js":
/*!****************************!*\
  !*** ./queries/queries.js ***!
  \****************************/
/*! exports provided: GET_TODOS, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, ADD_TODO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TODOS", function() { return GET_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_TODO", function() { return TOGGLE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TODO", function() { return UPDATE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TODO", function() { return DELETE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation createTodo($data: TodoCreateInput!){\n      createTodo(data: $data){\n          id\n          title\n          completed\n      }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation deleteTodo($where: TodoWhereUniqueInput!){\n      deleteTodo(where: $where){\n          id\n      }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation updateTodo($data: TodoUpdateInput!, $where: TodoWhereUniqueInput!){\n    updateTodo(data: $data, where: $where) {\n      id\n      title\n      completed\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  mutation toggleTodo($data: TodoUpdateInput!, $where: TodoWhereUniqueInput!){\n    updateTodo(data: $data, where: $where) {\n      id\n      title\n      completed\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  query {\n    todoes {\n      id\n      title\n      completed\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var GET_TODOS = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject());
var TOGGLE_TODO = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject2());
var UPDATE_TODO = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject3());
var DELETE_TODO = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject4());
var ADD_TODO = graphql_tag__WEBPACK_IMPORTED_MODULE_1___default()(_templateObject5());

/***/ })

})
//# sourceMappingURL=index.js.2e11661f28417882df30.hot-update.js.map