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

const Heading = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo-image" src="https://assets.designhill.com/design-blog/wp-content/uploads/2024/06/5.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

// inline style css in not recommended
const styleCard = {
    backgroundColor: "orange"
};

const RestaurantCard = ({resData}) => {
    console.log(resData);
    const { resName, cuisine, rating, deliveryTime } = resData;

    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" alt="biryani-image" src="https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fimage.jpg%2Fimage-1744199226259.jpg&w=2048&q=75" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );
};

const resList = [
    {
        id: "1",
        resName: "Meghana Foods",
        cuisine: "Biryani, South Indian",
        rating: "4.4 starts",
        deliveryTime: "30 minutes delivery"
    },
    {
        id: "2",
        resName: "KFC",
        cuisine: "French Fries",
        rating: "4 stars",
        deliveryTime: "45 minutes delivery"
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>

            <div className="res-container">
                {resList.map((restaurant) => {
                    console.log(restaurant);
                    return <RestaurantCard key={restaurant.id} resData={restaurant} />
                })}
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <Heading/>
            <Body />
        </div>
    );
};

const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //rendering react element
// root.render(jsxHeading); //rendering jsx element
root.render(<App />);
