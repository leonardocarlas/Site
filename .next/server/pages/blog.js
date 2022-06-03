(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 732:
/***/ ((module) => {

// Exports
module.exports = {
	"heading2Xl": "Blog_heading2Xl__NycTH",
	"headingXl": "Blog_headingXl__XBE5X",
	"headingLg": "Blog_headingLg__n8OQ4",
	"headingMd": "Blog_headingMd__z99sn",
	"borderCircle": "Blog_borderCircle__Ko6O7",
	"colorInherit": "Blog_colorInherit__DVoVz",
	"padding1px": "Blog_padding1px__SsNoM",
	"list": "Blog_list__vF3iB",
	"listItem": "Blog_listItem__dC2ZH",
	"lightText": "Blog_lightText__rBczb",
	"title": "Blog_title__QWKBs",
	"subtitle": "Blog_subtitle__Y3J_3",
	"row": "Blog_row__AAVpZ",
	"column": "Blog_column__Suicc",
	"sectionDark": "Blog_sectionDark__vcG7A",
	"sectionLight": "Blog_sectionLight__rA_ny",
	"element": "Blog_element__HyrXB",
	"pulse": "Blog_pulse__bWW7I"
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

/***/ 3190:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Blog),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Blog_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(732);
/* harmony import */ var _Blog_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Blog_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6825);
/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7417);
/* harmony import */ var _redux_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_posts__WEBPACK_IMPORTED_MODULE_1__]);
_utils_posts__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function Blog(allPostsData) {
    const isDarkmode = (0,_redux_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useAppSelector */ .C)((state)=>state.darkmode.isDarkmode
    );
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: isDarkmode ? (_Blog_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sectionDark) : (_Blog_module_scss__WEBPACK_IMPORTED_MODULE_3___default().sectionLight),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: `${(_Blog_module_scss__WEBPACK_IMPORTED_MODULE_3___default().element)} ${(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title)} ${"text-5xl"}`,
            children: "Coming sooooonn"
        })
    });
};
const getStaticProps = async ()=>{
    const allPostsData = (0,_utils_posts__WEBPACK_IMPORTED_MODULE_1__/* .getSortedPostsData */ .ld)();
    return {
        props: {
            allPostsData
        }
    };
} /*

  {allPostsData.map(({ id, date, title }) => (
    <li className={utilStyles.listItem} key={id}>
    <Link href={`/posts/${id}`}>
        <a>{title}</a>
    </Link>
    <br />
    <small className={utilStyles.lightText}>
        <p>Date</p>
    </small>
    </li>
))}

  */ ;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ }),

/***/ 8076:
/***/ ((module) => {

"use strict";
module.exports = require("gray-matter");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1774:
/***/ ((module) => {

"use strict";
module.exports = import("remark");;

/***/ }),

/***/ 7740:
/***/ ((module) => {

"use strict";
module.exports = import("remark-html");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [417], () => (__webpack_exec__(3190)));
module.exports = __webpack_exports__;

})();