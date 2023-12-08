'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.metadata = void 0;
var image_1 = require("next/image");
require("./login.scss");
var react_1 = require("react");
var sweetalert_1 = require("sweetalert");
var navigation_1 = require("next/navigation");
var link_1 = require("next/link");
var head_1 = require("next/head");
exports.metadata = {
    title: "Login Page",
    description: "Login Page Auth",
    icons: "/logo.png"
};
var LoginPage = function () {
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), pass = _b[0], setPass = _b[1];
    var _c = react_1.useState(false), open = _c[0], setOpen = _c[1];
    var _d = react_1.useState(""), err = _d[0], setErr = _d[1];
    var router = navigation_1.useRouter();
    var handleLogin = function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(!email && !pass)) return [3 /*break*/, 1];
                    setErr('Please fill the content!');
                    return [3 /*break*/, 4];
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, fetch('http://localhost:3006/login', {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                email: email,
                                password: pass
                            })
                        })];
                case 2:
                    _a.sent();
                    sweetalert_1["default"]({
                        icon: "success",
                        title: "Login Success!"
                    });
                    router.push('/MainMenu');
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.info(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Login Page"),
            React.createElement("link", { rel: "icon", type: "image/png", href: "/logo.png" }),
            React.createElement("meta", { charSet: "UTF-8" }),
            React.createElement("meta", { name: "description", content: "Beads Me" }),
            React.createElement("meta", { name: "keywords", content: "Beads Product" }),
            React.createElement("meta", { name: "author", content: "Beads Me" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" })),
        React.createElement("main", { className: "main-login", id: "Login" },
            React.createElement(image_1["default"], { className: "img-login", src: "/hero.png", alt: "Login-Page", width: 500, height: 500 }),
            React.createElement("section", { className: "card-login" },
                React.createElement("h1", { className: "header-login" },
                    "Login",
                    React.createElement("br", null),
                    "Your Account"),
                React.createElement("div", { className: "form-input" },
                    React.createElement("form", null,
                        React.createElement("label", { className: "label-email" }, "Email"),
                        React.createElement("br", null),
                        React.createElement("input", { type: 'email', className: "input-email", value: email, onChange: function (e) {
                                setEmail(e.target.value);
                                setErr('');
                            }, placeholder: 'Johndoe@gmail.com' }),
                        React.createElement("p", { className: "error-email" }, err),
                        React.createElement("br", null),
                        React.createElement("label", { className: "label-password" }, "Password"),
                        React.createElement("br", null),
                        React.createElement("input", { type: "password", className: "input-password", value: pass, onChange: function (e) {
                                setPass(e.target.value);
                                setErr('');
                            }, placeholder: '*******' }),
                        React.createElement("p", { className: "error-pass" }, err),
                        React.createElement("section", { className: "btn-login" },
                            React.createElement("button", { type: "button", className: "btn-submit", onClick: handleLogin }, "Login")))),
                React.createElement("p", { className: "can-account" },
                    "dont have an account ? ",
                    React.createElement(link_1["default"], { href: "/Register" },
                        React.createElement("span", { className: "span-account" }, "Register")))))));
};
exports["default"] = LoginPage;
