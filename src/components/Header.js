import { LOGO_URL } from '../utils/constants'
import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext.js';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const { loggedInUser } = useContext(UserContext);

    console.log(btnName);
    console.log("Header rendered");

    useEffect(() => {
        console.log("useEffect in header called");
    }, [btnName]);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo-container">
                <img className="w-56" alt="logo-image" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className='flex p-4 m-4'>
                    <li className='px-4'>
                        online Status: {onlineStatus ? "🟢" : "🔴"}
                    </li>
                    <li className='px-4'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='px-4'>
                        {/* <a href="/about">About Us</a> */}
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className='px-4'>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className='px-4'>
                        Cart
                    </li>
                    <button className="login" 
                        onClick={() =>{
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                            console.log("inside onClick", btnName);
                        }}>
                        {btnName}
                    </button>

                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;