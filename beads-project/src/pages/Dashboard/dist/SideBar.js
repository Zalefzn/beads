'use client';
"use strict";
exports.__esModule = true;
require("./sidebar.scss");
var listItems = [
    {
        route: "Product",
        url: ""
    },
    {
        route: "Transaction",
        url: ""
    },
    {
        route: "Wishlist",
        url: ""
    }
];
var SideBar = function () {
    return (React.createElement("main", { className: "sidebar-content" },
        React.createElement("section", { className: "section-sidebar" },
            React.createElement("ul", { className: "ul-sidebar" }, listItems.map(function (items) {
                return React.createElement("li", { className: "li-sidebar" },
                    React.createElement("button", { type: "button", name: "button", className: "btn-sidebar" }, items.route));
            })))));
};
exports["default"] = SideBar;
