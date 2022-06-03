exports.id = 917;
exports.ids = [917];
exports.modules = {

/***/ 7276:
/***/ ((module) => {

// Exports
module.exports = {
	"heading2Xl": "Button_heading2Xl___5PXE",
	"headingXl": "Button_headingXl__lSILD",
	"headingLg": "Button_headingLg__yLSlu",
	"headingMd": "Button_headingMd__DSCdy",
	"borderCircle": "Button_borderCircle__BXyB3",
	"colorInherit": "Button_colorInherit__pjYIK",
	"padding1px": "Button_padding1px__L0YzL",
	"list": "Button_list__H60IG",
	"listItem": "Button_listItem__OWdbt",
	"lightText": "Button_lightText__6sW_m",
	"title": "Button_title__X2zoj",
	"subtitle": "Button_subtitle__syZ9I",
	"row": "Button_row__An__i",
	"column": "Button_column__F9BYo",
	"button": "Button_button__30ukX"
};


/***/ }),

/***/ 6825:
/***/ ((module) => {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl__KOSxw",
	"headingXl": "utils_headingXl__vl546",
	"headingLg": "utils_headingLg__l7Pey",
	"headingMd": "utils_headingMd__b_saZ",
	"borderCircle": "utils_borderCircle__kKi7y",
	"colorInherit": "utils_colorInherit__p8AMP",
	"padding1px": "utils_padding1px__AQSZz",
	"list": "utils_list__kKAGG",
	"listItem": "utils_listItem___Ywm2",
	"lightText": "utils_lightText__OTRwu",
	"title": "utils_title__b26a8",
	"subtitle": "utils_subtitle___Fu_s",
	"row": "utils_row__3vE6C",
	"column": "utils_column__JoFQT"
};


/***/ }),

/***/ 4518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7276);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__);


function Button(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: (_Button_module_scss__WEBPACK_IMPORTED_MODULE_1___default().button),
            onClick: props.callback,
            "data-testid": "button",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: props.label
            })
        })
    });
};


/***/ }),

/***/ 7174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useAppDispatch),
/* harmony export */   "C": () => (/* binding */ useAppSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)()
;
const useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ })

};
;