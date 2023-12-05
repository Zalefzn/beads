'use client';
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
require("./mainMenu.scss");
var auth_1 = require("@/api/Context/auth");
var react_1 = require("react");
var MainDash = function () {
    var router = navigation_1.useRouter();
    var _a = auth_1.useGlobalContext(), userId = _a.userId, setUserId = _a.setUserId, data = _a.data, setData = _a.setData;
    react_1.useEffect(function () {
        setUserId('2');
        setData([
            { firstName: 'Rizal' },
            { firstName: 'Fauzan' },
            { firstName: 'Bisma' },
        ]);
    });
    return (React.createElement("main", { className: "main-dashboard", id: "MainMenu" },
        React.createElement("h1", null, "Dashboard Page"),
        React.createElement("h2", null,
            " Server user : ",
            userId),
        data.map(function (e, i) {
            return React.createElement("p", { key: i }, e.firstName);
        })));
};
exports["default"] = MainDash;
