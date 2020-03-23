webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/apollo.js":
/*!*************************!*\
  !*** ./pages/apollo.js ***!
  \*************************/
/*! exports provided: graphqlURI, client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphqlURI", function() { return graphqlURI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-client */ "./node_modules/apollo-client/bundle.esm.js");
/* harmony import */ var apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-cache-inmemory */ "./node_modules/apollo-cache-inmemory/lib/bundle.esm.js");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-http */ "./node_modules/apollo-link-http/lib/bundle.esm.js");
/* harmony import */ var apollo_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link-error */ "./node_modules/apollo-link-error/lib/bundle.esm.js");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-link */ "./node_modules/apollo-link/lib/bundle.esm.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-with-apollo */ "./node_modules/next-with-apollo/lib/index.js");
/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_6__);







var graphqlURI = 'https://eu1.prisma.sh/roman-42dfa5/demo/dev'; // export default withApollo(
//   ({ initialState }) =>
//     new ApolloClient({
//       link: ApolloLink.from([
//         onError(({ graphQLErrors, networkError }) => {
//           if (graphQLErrors)
//             graphQLErrors.forEach(({ message, locations, path }) =>
//               console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
//             )
//           if (networkError) console.log(`[Network error]: ${networkError}`)
//         }),
//         new HttpLink({
//           uri: graphqlURI,
//           credentials: 'same-origin',
//           fetch
//         })
//       ]),
//       cache: new InMemoryCache().restore(initialState || {})
//     })
// )

var client = new apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  link: apollo_link__WEBPACK_IMPORTED_MODULE_4__["ApolloLink"].from([Object(apollo_link_error__WEBPACK_IMPORTED_MODULE_3__["onError"])(function (_ref) {
    var graphQLErrors = _ref.graphQLErrors,
        networkError = _ref.networkError;
    if (graphQLErrors) graphQLErrors.forEach(function (_ref2) {
      var message = _ref2.message,
          locations = _ref2.locations,
          path = _ref2.path;
      return console.log("ti pidor[GraphQL error]: Message: ".concat(message, ", Location: ").concat(locations, ", Path: ").concat(path));
    });
    if (networkError) console.log("[Network error]: ".concat(networkError));
  }), new apollo_link_http__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
    uri: graphqlURI,
    credentials: 'same-origin',
    fetch: node_fetch__WEBPACK_IMPORTED_MODULE_5___default.a
  })]),
  cache: new apollo_cache_inmemory__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
});

/***/ })

})
//# sourceMappingURL=index.js.81fb282eeae739cae854.hot-update.js.map