import React from "react";
import ReactDOM from "react-dom/client";

/*
    <div id="parent">
        <div id="child">
            <h1>I'm h1 tag</h1>
            <h2>I'm h2 tag</h2>
        </div>
    </div>
*/

// const parent=React.createElement(
//     "div",
//     {id: "parent"},
//     React.createElement(
//         "div",
//         {id: "child"},
//         [
//             React.createElement(
//                 "h1",
//                 {},
//                 "I'm h1 tag"
//             ),
//             React.createElement(
//                 "h2",
//                 {},
//                 "I'm h2 tag"
//             )
//         ]
//     )
// );


// const heading=React.createElement(
//     "h1",
//     {id: "heading"},
//     "Hello World from React!"
// );

// console.log(heading); //heading is an object
// console.log(parent);


// JSX - not HTML in JS. HTML-like or XML-like syntax. 
// transpiled before it reaches the JS Engine. Transpiling is done by Parcel - Babel.
// JSX is transpiled to ReactElement and then to JS object and then to html.
const jsxHeading=<h1 className="heading">Namaste React from JSX 🚀</h1>;
console.log(jsxHeading);


const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);