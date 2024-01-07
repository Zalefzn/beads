'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./content.scss");
var Content = function (_a) {
    var page = _a.page;
    return (react_1["default"].createElement("main", { className: "main-content" },
        page === 'product' && react_1["default"].createElement("h2", null, "Product Page"),
        page === 'transaction' && react_1["default"].createElement("h2", null, "Transaction Page"),
        page === 'wishlist' && react_1["default"].createElement("h2", null, "Wishlist Page")));
};
exports["default"] = Content;
