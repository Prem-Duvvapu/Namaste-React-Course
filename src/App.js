import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";

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
// const jsxHeading = (<h1 className="heading">
//     Namaste React from JSX 🚀
//     </h1>);
// console.log(jsxHeading);


// React Component
// Class Based Component - OLD
// Functional Component - NEW

// const Title = () => <h1 className="heading">Namaste React from JSX 🚀</h1>;

// const name="Prem";

// React Functional Component - A function that returns a JSX code
// Component Composition
// const HeadingComponent = () => {
//     return (
//     <div id="container">
//         <Title />
//         <Title></Title>
//         {Title()}
//         <h3>{name}</h3>
//         {3+4}
//         <h1>Namaste React Functional Component</h1>
//     </div>)
// };


const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
    const [userName, setUserName] = useState();

    // authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: "Prem D",
        };

        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName}}>
                <div className="app">
                    <Header/>
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>,
            },
            {
                path: "/grocery",
                element: (<Suspense fallback={<h1>Loading...</h1>}>
                            <Grocery />
                        </Suspense>),
            }
        ],
        errorElement: <Error />,
    },
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //rendering react element
// root.render(jsxHeading); //rendering jsx element
root.render(<RouterProvider router={appRouter} />);
