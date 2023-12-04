'use client';
"use strict";
exports.__esModule = true;
require("./navbar.scss");
var Data_1 = require("../../elemnts/Data");
var react_1 = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
function Navbar() {
    var router = navigation_1.useRouter();
    function handleData() {
        // swal({
        //      icon: "warning",    
        //      title: "Register First!",
        //      text: "Please Register First"
        // });
        router.push('/Login');
    }
    return (React.createElement("header", { className: "header-list" },
        React.createElement("nav", { className: "nav-list" },
            React.createElement(image_1["default"], { src: "/logo.png", alt: "", width: 130, height: 80, className: "img-logo" }),
            React.createElement("ul", { className: "ul-list" }, Data_1.listData.map(function (list) { return (React.createElement(react_1.Fragment, { key: list.id },
                React.createElement("li", { className: "list list-item" },
                    React.createElement(link_1["default"], { href: list.url, scroll: true }, list.name)))); })),
            React.createElement("button", { className: "btn", name: "button", type: "button", onClick: handleData }, "Sign up"))));
}
exports["default"] = Navbar;
