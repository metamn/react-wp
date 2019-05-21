(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SiteTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SiteTitle */ "./src/components/SiteTitle/index.js");
var _jsxFileName = "/home/cs/work/react-wp/wp-content/themes/react-wp-theme/react-src/src/App.js";



const App = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_SiteTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/SiteTitle/SiteTitle.js":
/*!***********************************************!*\
  !*** ./src/components/SiteTitle/SiteTitle.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-relay */ "./node_modules/react-relay/index.js");
/* harmony import */ var react_relay__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_relay__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../environment */ "./src/environment.js");
var _graphql,
    _jsxFileName = "/home/cs/work/react-wp/wp-content/themes/react-wp-theme/react-src/src/components/SiteTitle/SiteTitle.js";





const SiteTitle = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_relay__WEBPACK_IMPORTED_MODULE_1__["QueryRenderer"], {
    environment: _environment__WEBPACK_IMPORTED_MODULE_2__["default"],
    query: _graphql || (_graphql = function () {
      const node = __webpack_require__(/*! ./__generated__/SiteTitleQuery.graphql */ "./src/components/SiteTitle/__generated__/SiteTitleQuery.graphql.js");

      if (node.hash && node.hash !== "63dfcb3e5253d4f66e6c9f9589420ca6") {
        console.error("The definition of 'SiteTitleQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data.");
      }

      return __webpack_require__(/*! ./__generated__/SiteTitleQuery.graphql */ "./src/components/SiteTitle/__generated__/SiteTitleQuery.graphql.js");
    }),
    variables: {},
    render: ({
      error,
      props
    }) => {
      if (error) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: undefined
        }, "Error!");
      }

      if (!props) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: undefined
        }, "Loading...");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: undefined
      }, props.generalSettings.title);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SiteTitle);

/***/ }),

/***/ "./src/components/SiteTitle/__generated__/SiteTitleQuery.graphql.js":
/*!**************************************************************************!*\
  !*** ./src/components/SiteTitle/__generated__/SiteTitleQuery.graphql.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * 
 * @relayHash 4608103a20771668e6c055f7b78dc664
 */

/* eslint-disable */

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SiteTitleQueryVariables = {||};
export type SiteTitleQueryResponse = {|
  +generalSettings: ?{|
    +title: ?string
  |}
|};
export type SiteTitleQuery = {|
  variables: SiteTitleQueryVariables,
  response: SiteTitleQueryResponse,
|};
*/

/*
query SiteTitleQuery {
  generalSettings {
    title
  }
}
*/

const node
/*: ConcreteRequest*/
= function () {
  var v0 = [{
    "kind": "LinkedField",
    "alias": null,
    "name": "generalSettings",
    "storageKey": null,
    "args": null,
    "concreteType": "GeneralSettings",
    "plural": false,
    "selections": [{
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    }]
  }];
  return {
    "kind": "Request",
    "fragment": {
      "kind": "Fragment",
      "name": "SiteTitleQuery",
      "type": "RootQuery",
      "metadata": null,
      "argumentDefinitions": [],
      "selections": v0
      /*: any*/

    },
    "operation": {
      "kind": "Operation",
      "name": "SiteTitleQuery",
      "argumentDefinitions": [],
      "selections": v0
      /*: any*/

    },
    "params": {
      "operationKind": "query",
      "name": "SiteTitleQuery",
      "id": null,
      "text": "query SiteTitleQuery {\n  generalSettings {\n    title\n  }\n}\n",
      "metadata": {}
    }
  };
}(); // prettier-ignore


node
/*: any*/
.hash = '63dfcb3e5253d4f66e6c9f9589420ca6';
module.exports = node;

/***/ }),

/***/ "./src/components/SiteTitle/index.js":
/*!*******************************************!*\
  !*** ./src/components/SiteTitle/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SiteTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SiteTitle */ "./src/components/SiteTitle/SiteTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SiteTitle__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/environment.js":
/*!****************************!*\
  !*** ./src/environment.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! relay-runtime */ "./node_modules/relay-runtime/index.js");
/* harmony import */ var relay_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(relay_runtime__WEBPACK_IMPORTED_MODULE_0__);


function fetchQuery(operation, variables) {
  return fetch("http://localhost/react-wp/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const environment = new relay_runtime__WEBPACK_IMPORTED_MODULE_0__["Environment"]({
  network: relay_runtime__WEBPACK_IMPORTED_MODULE_0__["Network"].create(fetchQuery),
  store: new relay_runtime__WEBPACK_IMPORTED_MODULE_0__["Store"](new relay_runtime__WEBPACK_IMPORTED_MODULE_0__["RecordSource"]())
});
/* harmony default export */ __webpack_exports__["default"] = (environment);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/home/cs/work/react-wp/wp-content/themes/react-wp-theme/react-src/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById("root")); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs/work/react-wp/wp-content/themes/react-wp-theme/react-src/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map