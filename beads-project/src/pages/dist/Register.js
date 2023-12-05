'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var sweetalert_1 = require("sweetalert");
require("./register.scss");
var link_1 = require("next/link");
var Register = function () {
    var router = navigation_1.useRouter();
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(""), pass = _b[0], setPass = _b[1];
    var _c = react_1.useState(""), username = _c[0], setUsername = _c[1];
    var _d = react_1.useState(""), confPass = _d[0], setConfPass = _d[1];
    var handleRegister = function () {
        if (!email && !pass && !confPass) {
            sweetalert_1["default"]({
                icon: "warning",
                title: "Please Fill Your Data First!"
            });
        }
        else {
            sweetalert_1["default"]({
                icon: "success",
                title: "Register Success!"
            });
            router.push('/Login');
        }
    };
    return (React.createElement("main", { className: "register-page", id: "Register" },
        React.createElement(image_1["default"], { src: "/hero.png", alt: "hero-register", width: 500, height: 500, className: "img-regis" }),
        React.createElement("section", { className: "card-register" },
            React.createElement("h1", { className: "header-register" },
                "Register",
                React.createElement("br", null),
                "Your Account"),
            React.createElement("div", { className: "form-input" },
                React.createElement("form", null,
                    React.createElement("label", { className: "label-username" }, "Username"),
                    React.createElement("br", null),
                    React.createElement("input", { type: 'text', className: "input-username", value: username, onChange: function (e) {
                            setUsername(e.target.value);
                        }, placeholder: 'Johndoe16' }),
                    React.createElement("br", null),
                    React.createElement("br", null),
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
                    React.createElement("br", null),
                    React.createElement("label", { className: "label-confPass" }, "Password"),
                    React.createElement("br", null),
                    React.createElement("input", { type: "password", className: "input-confPass", value: confPass, onChange: function (e) {
                            setConfPass(e.target.value);
                        }, placeholder: '*******' }),
                    React.createElement("br", null),
                    React.createElement("section", { className: "btn-regis" },
                        React.createElement("button", { type: "button", className: "btn-submitRegis", onClick: handleRegister }, "Register")))),
            React.createElement("p", { className: "can-account-regis" },
                "have an account ? ",
                React.createElement(link_1["default"], { href: "/Login" },
                    React.createElement("span", { className: "span-account-regis" }, "Login"))))));
};
exports["default"] = Register;
