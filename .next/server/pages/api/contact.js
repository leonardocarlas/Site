"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 4362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contact.ts

async function handler(req, res) {
    try {
        // the gmail account that should send me the mail
        let transporter = external_nodemailer_default().createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "collectionsight@gmail.com",
                pass: "Dragalge3"
            }
        });
        let options = {
            from: `${req.body.email}`,
            to: "lio.del.bronx@gmail.com",
            subject: `${req.body.subject}`,
            text: `${req.body.message}`
        };
        let result1 = await transporter.sendMail(options);
        options.to = `${req.body.email}`;
        options.subject = "Your message has been sent";
        options.text = "Thank you for contacting us. We will reply you as soon as possible";
        let result2 = await transporter.sendMail(options);
        res.status(200).json({
            name: "The email has been sent"
        });
    } catch (error) {
        res.status(400);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4362));
module.exports = __webpack_exports__;

})();