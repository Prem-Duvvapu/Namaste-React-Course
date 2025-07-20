import { LOGO_URL } from '../utils/constants'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    console.log(btnName);
    console.log("Header rendered");

    useEffect(() => {
        console.log("useEffect in header called");
    }, [btnName]);

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo-image" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        {/* <a href="/about">About Us</a> */}
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" 
                        onClick={() =>{
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                            console.log("inside onClick", btnName);
                        }}>
                        {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;