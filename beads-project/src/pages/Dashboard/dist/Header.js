'use client';
"use strict";
exports.__esModule = true;
require("./header.scss");
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var HeaderDash = function () {
    var router = navigation_1.useRouter();
    var handleSignout = function () {
        router.push('/Login');
    };
    return (React.createElement("header", { className: "header-dashboard" },
        React.createElement("nav", { className: "nav-dashboard" },
            React.createElement("li", { className: "logo-beads" },
                React.createElement(image_1["default"], { src: "/logo.png", height: 70, width: 100, alt: "beads" })),
            React.createElement("li", { className: "input-search" },
                React.createElement("input", { type: 'text', placeholder: 'Search Product Here...', className: "input-product" })),
            React.createElement("li", { className: "signout" },
                React.createElement("button", { type: "submit", onClick: handleSignout }, "Sign out")))));
};
exports["default"] = HeaderDash;
