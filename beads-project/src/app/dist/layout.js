"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("../styles/globals.css");
var auth_1 = require("@/api/Context/auth");
var inter = google_1.Inter({ subsets: ['latin'] });
exports.metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            React.createElement("title", null, "Beads Me"),
            React.createElement("link", { rel: "icon", type: "image/png", href: "/logo.png" }),
            React.createElement("meta", { charSet: "UTF-8" }),
            React.createElement("meta", { name: "description", content: "Beads Me" }),
            React.createElement("meta", { name: "keywords", content: "Beads Product" }),
            React.createElement("meta", { name: "author", content: "Beads Me" }),
            React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" })),
        React.createElement("body", { className: inter.className },
            React.createElement(auth_1.GlobalContextProvider, null, children))));
}
exports["default"] = RootLayout;
