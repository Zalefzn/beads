'use client';
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
require("./mainMenu.scss");
var MainDash = function () {
    var router = navigation_1.useRouter();
    var handleSignout = function () {
        router.push('/Login');
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("header", { className: "header-dashboard" },
            React.createElement("nav", { className: "nav-dashboard" },
                React.createElement("li", { className: "signout" },
                    React.createElement("button", { type: "submit", onClick: handleSignout }, "Sign out")))),
        React.createElement("main", { className: "main-dashboard", id: "MainMenu" })));
};
exports["default"] = MainDash;
