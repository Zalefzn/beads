'use client';
"use strict";
exports.__esModule = true;
require("./sidebar.scss");
var listItems = [
    {
        route: "Product",
        url: "product"
    },
    {
        route: "Transaction",
        url: "transaction"
    },
    {
        route: "Wishlist",
        url: "wishlist"
    }
];
var SideBar = function (_a) {
    var onItemClick = _a.onItemClick;
    return (React.createElement("main", { className: "sidebar-content" },
        React.createElement("section", { className: "section-sidebar" },
            React.createElement("ul", { className: "ul-sidebar" }, listItems.map(function (items) {
                return React.createElement("li", { className: "li-sidebar" },
                    React.createElement("button", { type: "button", name: "button", className: "btn-sidebar", onClick: function () { return onItemClick(items.url); } }, items.route));
            })))));
};
exports["default"] = SideBar;
