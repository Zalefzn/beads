'use client';
"use strict";
exports.__esModule = true;
var auth_1 = require("@/api/Context/auth");
var image_1 = require("next/image");
require("./login.scss");
var react_1 = require("react");
var react_2 = require("react");
var sweetalert_1 = require("sweetalert");
var navigation_1 = require("next/navigation");
var link_1 = require("next/link");
var LoginPage = function () {
    var _a = auth_1.useGlobalContext(), userId = _a.userId, setUserId = _a.setUserId, data = _a.data, setData = _a.setData;
    var _b = react_2.useState(""), email = _b[0], setEmail = _b[1];
    var _c = react_2.useState(""), pass = _c[0], setPass = _c[1];
    var _d = react_2.useState(false), open = _d[0], setOpen = _d[1];
    var router = navigation_1.useRouter();
    react_1.useEffect(function () {
        setUserId('2');
        setData([
            { firstName: 'Rizal' },
            { firstName: 'Fauzan' },
            { firstName: 'Bisma' },
        ]);
    });
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
    return (React.createElement("main", { className: "main-login", id: "Login" },
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
                    React.createElement("span", { className: "span-account" }, "Register"))))));
};
exports["default"] = LoginPage;
