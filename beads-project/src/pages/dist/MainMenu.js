'use client';
"use strict";
exports.__esModule = true;
require("./mainMenu.scss");
var head_1 = require("next/head");
var Header_1 = require("./Dashboard/Header");
var SideBar_1 = require("./Dashboard/SideBar");
var MainDash = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(head_1["default"], null,
            React.createElement("title", null, "Dashboard Page"),
            React.createElement("link", { rel: "icon", type: "image/png", href: "/logo.png" }),
            React.createElement("meta", { charSet: "UTF-8" }),
            React.createElement("meta", { name: "description", content: "Beads Me" }),
            React.createElement("meta", { name: "keywords", content: "Beads Product" }),
            React.createElement("meta", { name: "author", content: "Beads Me" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" })),
        React.createElement(Header_1["default"], null),
        React.createElement(SideBar_1["default"], null)));
};
exports["default"] = MainDash;
