"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/create-emotion-cache.ts":
/*!*************************************!*\
  !*** ./lib/create-emotion-cache.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createEmotionCache)\n/* harmony export */ });\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/cache */ \"@emotion/cache\");\n/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_0__);\n\nconst isBrowser = \"undefined\" !== \"undefined\";\nfunction createEmotionCache() {\n    let insertionPoint;\n    if (isBrowser) {\n        const emotionInsertionPoint = document.querySelector(`meta[name=\"emotion-insertion-point\"]`);\n        insertionPoint = emotionInsertionPoint ?? undefined;\n    }\n    return _emotion_cache__WEBPACK_IMPORTED_MODULE_0___default()({\n        key: \"mui-style\",\n        insertionPoint\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY3JlYXRlLWVtb3Rpb24tY2FjaGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRXpDLE1BQU1DLFNBQVMsR0FBRyxXQUFhLEtBQUssV0FBVztBQUVoQyxTQUFTQyxrQkFBa0IsR0FBRztJQUN6QyxJQUFJQyxjQUFjO0lBRWxCLElBQUlGLFNBQVMsRUFBQztRQUNWLE1BQU1HLHFCQUFxQixHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFDNUZILGNBQWMsR0FBR0MscUJBQXFCLElBQUlHLFNBQVMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsT0FBT1AscURBQVcsQ0FBQztRQUNmUSxHQUFHLEVBQUUsV0FBVztRQUNoQkwsY0FBYztLQUNqQixDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9jcmVhdGUtZW1vdGlvbi1jYWNoZS50cz9jMGVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVDYWNoZSBmcm9tIFwiQGVtb3Rpb24vY2FjaGVcIjtcblxuY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW1vdGlvbkNhY2hlKCkge1xuICAgIGxldCBpbnNlcnRpb25Qb2ludDogSFRNTEVsZW1lbnQ7XG5cbiAgICBpZiAoaXNCcm93c2VyKXtcbiAgICAgICAgY29uc3QgZW1vdGlvbkluc2VydGlvblBvaW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWV0YVtuYW1lPVwiZW1vdGlvbi1pbnNlcnRpb24tcG9pbnRcIl1gKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPSBlbW90aW9uSW5zZXJ0aW9uUG9pbnQgPz8gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDYWNoZSh7XG4gICAgICAgIGtleTogJ211aS1zdHlsZScsXG4gICAgICAgIGluc2VydGlvblBvaW50XG4gICAgfSlcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVDYWNoZSIsImlzQnJvd3NlciIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsImluc2VydGlvblBvaW50IiwiZW1vdGlvbkluc2VydGlvblBvaW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidW5kZWZpbmVkIiwia2V5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/create-emotion-cache.ts\n");

/***/ }),

/***/ "./lib/theme.ts":
/*!**********************!*\
  !*** ./lib/theme.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/colors */ \"@mui/material/colors\");\n/* harmony import */ var _mui_material_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_colors__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// Create a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#556cd6\"\n        },\n        secondary: {\n            main: \"#19857b\"\n        },\n        error: {\n            main: _mui_material_colors__WEBPACK_IMPORTED_MODULE_1__.red.A400\n        }\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUQ7QUFDUjtBQUV6QywyQkFBMkI7QUFDM0IsTUFBTUUsS0FBSyxHQUFHRixpRUFBVyxDQUFDO0lBQ3RCRyxPQUFPLEVBQUU7UUFDTEMsT0FBTyxFQUFFO1lBQ0xDLElBQUksRUFBRSxTQUFTO1NBQ2xCO1FBQ0RDLFNBQVMsRUFBRTtZQUNQRCxJQUFJLEVBQUUsU0FBUztTQUNsQjtRQUNERSxLQUFLLEVBQUU7WUFDSEYsSUFBSSxFQUFFSiwwREFBUTtTQUNqQjtLQUNKO0NBQ0osQ0FBQztBQUVGLGlFQUFlQyxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvdGhlbWUudHM/MjQ0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVRoZW1lfSBmcm9tICdAbXVpL21hdGVyaWFsL3N0eWxlcyc7XG5pbXBvcnQge3JlZH0gZnJvbSAnQG11aS9tYXRlcmlhbC9jb2xvcnMnO1xuXG4vLyBDcmVhdGUgYSB0aGVtZSBpbnN0YW5jZS5cbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xuICAgIHBhbGV0dGU6IHtcbiAgICAgICAgcHJpbWFyeToge1xuICAgICAgICAgICAgbWFpbjogJyM1NTZjZDYnLFxuICAgICAgICB9LFxuICAgICAgICBzZWNvbmRhcnk6IHtcbiAgICAgICAgICAgIG1haW46ICcjMTk4NTdiJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIG1haW46IHJlZC5BNDAwLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XG4iXSwibmFtZXMiOlsiY3JlYXRlVGhlbWUiLCJyZWQiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsInNlY29uZGFyeSIsImVycm9yIiwiQTQwMCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/theme.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/theme */ \"./lib/theme.ts\");\n/* harmony import */ var _lib_create_emotion_cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/create-emotion-cache */ \"./lib/create-emotion-cache.ts\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst clientSideEmotionCache = (0,_lib_create_emotion_cache__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nfunction MyApp(props) {\n    const { Component , pageProps , emotionCache =clientSideEmotionCache  } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_6__.CacheProvider, {\n        value: emotionCache,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                    name: \"viewport\",\n                    content: \"minimum-scale=1, initial-scale=1, width=device-width\"\n                }, void 0, false, {\n                    fileName: \"/Users/0gun/projects/nextron-prac/renderer/pages/_app.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/0gun/projects/nextron-prac/renderer/pages/_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n                theme: _lib_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.CssBaseline, {}, void 0, false, {\n                        fileName: \"/Users/0gun/projects/nextron-prac/renderer/pages/_app.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps\n                    }, void 0, false, {\n                        fileName: \"/Users/0gun/projects/nextron-prac/renderer/pages/_app.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/0gun/projects/nextron-prac/renderer/pages/_app.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/0gun/projects/nextron-prac/renderer/pages/_app.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDRztBQUU0QjtBQUN4QjtBQUU0QjtBQUNoQjtBQUU3QyxNQUFNTyxzQkFBc0IsR0FBR0YscUVBQWtCLEVBQUU7QUFNcEMsU0FBU0csS0FBSyxDQUFDQyxLQUFpQixFQUFFO0lBQzdDLE1BQU0sRUFBQ0MsU0FBUyxHQUFFQyxTQUFTLEdBQUVDLFlBQVksRUFBR0wsc0JBQXNCLEdBQUMsR0FBR0UsS0FBSztJQUUzRSxxQkFDSSw4REFBQ0gseURBQWE7UUFBQ08sS0FBSyxFQUFFRCxZQUFZOzswQkFDOUIsOERBQUNYLGtEQUFJOzBCQUNELDRFQUFDYSxNQUFJO29CQUFDQyxJQUFJLEVBQUMsVUFBVTtvQkFBQ0MsT0FBTyxFQUFDLHNEQUFzRDs7Ozs7d0JBQUU7Ozs7O29CQUNuRjswQkFDUCw4REFBQ2Isd0RBQWE7Z0JBQUNDLEtBQUssRUFBRUEsa0RBQUs7O2tDQUN2Qiw4REFBQ0Ysc0RBQVc7Ozs7NEJBQUU7a0NBQ2QsOERBQUNRLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzs7Ozs7NEJBQUk7Ozs7OztvQkFDaEI7Ozs7OztZQUNKLENBQ25CO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgdHlwZSB7QXBwUHJvcHN9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCB7Q3NzQmFzZWxpbmUsIFRoZW1lUHJvdmlkZXJ9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL2xpYi90aGVtZSc7XG5pbXBvcnQgdHlwZSB7RW1vdGlvbkNhY2hlfSBmcm9tIFwiQGVtb3Rpb24vY2FjaGVcIjtcbmltcG9ydCBjcmVhdGVFbW90aW9uQ2FjaGUgZnJvbSAnLi4vbGliL2NyZWF0ZS1lbW90aW9uLWNhY2hlJztcbmltcG9ydCB7Q2FjaGVQcm92aWRlcn0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnO1xuXG5jb25zdCBjbGllbnRTaWRlRW1vdGlvbkNhY2hlID0gY3JlYXRlRW1vdGlvbkNhY2hlKCk7XG5cbnR5cGUgTXlBcHBQcm9wcyA9IEFwcFByb3BzICYge1xuICAgIGVtb3Rpb25DYWNoZT86IEVtb3Rpb25DYWNoZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAocHJvcHM6IE15QXBwUHJvcHMpIHtcbiAgICBjb25zdCB7Q29tcG9uZW50LCBwYWdlUHJvcHMsIGVtb3Rpb25DYWNoZSA9IGNsaWVudFNpZGVFbW90aW9uQ2FjaGV9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FjaGVQcm92aWRlciB2YWx1ZT17ZW1vdGlvbkNhY2hlfT5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgICAgPC9DYWNoZVByb3ZpZGVyPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWQiLCJDc3NCYXNlbGluZSIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsImNyZWF0ZUVtb3Rpb25DYWNoZSIsIkNhY2hlUHJvdmlkZXIiLCJjbGllbnRTaWRlRW1vdGlvbkNhY2hlIiwiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImVtb3Rpb25DYWNoZSIsInZhbHVlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "@emotion/cache":
/*!*********************************!*\
  !*** external "@emotion/cache" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/colors":
/*!***************************************!*\
  !*** external "@mui/material/colors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/colors");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();