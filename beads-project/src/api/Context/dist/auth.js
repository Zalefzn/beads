'use client';
"use strict";
exports.__esModule = true;
exports.useGlobalContext = exports.GlobalContextProvider = void 0;
var react_1 = require("react");
var GlobalContext = react_1.createContext({
    userId: '',
    setUserId: function () { return ''; },
    data: [],
    setData: function () { return []; }
});
exports.GlobalContextProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(''), userId = _b[0], setUserId = _b[1];
    var _c = react_1.useState([]), data = _c[0], setData = _c[1];
    return (React.createElement(GlobalContext.Provider, { value: { userId: userId, setUserId: setUserId, data: data, setData: setData } }, children));
};
exports.useGlobalContext = function () { return react_1.useContext(GlobalContext); };
