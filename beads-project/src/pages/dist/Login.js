'use client';
"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var image_1 = require("next/image");
require("./login.scss");
var react_1 = require("react");
var sweetalert_1 = require("sweetalert");
var navigation_1 = require("next/navigation");
var link_1 = require("next/link");
exports.metadata = {
    title: "Login Page",
    description: "Login Page Auth",
    icons: "/logo.png"
};
var LoginPage = function () {
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), pass = _b[0], setPass = _b[1];
    var _c = react_1.useState(false), open = _c[0], setOpen = _c[1];
    var router = navigation_1.useRouter();
    var handleLogin = function () {
        if (!email && !pass) {
            sweetalert_1["default"]({
                icon: "warning",
                title: "Please Fill TextField!",
                text: "Wrong Email & Password!"
            });
        }
        else {
            sweetalert_1["default"]({
                icon: "success",
                title: "Login Success!"
            });
            router.push('/MainMenu');
        }
    };
    return (React.createElement(React.Fragment, null,
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
                            }, placeholder: 'Johndoe@gmail.com' }),
                        React.createElement("br", null),
                        React.createElement("br", null),
                        React.createElement("label", { className: "label-password" }, "Password"),
                        React.createElement("br", null),
                        React.createElement("input", { type: "password", className: "input-password", value: pass, onChange: function (e) {
                                setPass(e.target.value);
                            }, placeholder: '*******' }),
                        React.createElement("br", null),
                        React.createElement("section", { className: "btn-login" },
                            React.createElement("button", { type: "button", className: "btn-submit", onClick: handleLogin }, "Login")))),
                React.createElement("p", { className: "can-account" },
                    "dont have an account ? ",
                    React.createElement(link_1["default"], { href: "/Register" },
                        React.createElement("span", { className: "span-account" }, "Register")))))));
};
exports["default"] = LoginPage;
