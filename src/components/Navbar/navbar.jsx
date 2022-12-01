import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/Alumlogo.png";
import "../../components/Navbar/navbar.css";
import { useLocation } from "react-router-dom";

function Navbar() {

    const visibleStyle = {
        // display: "block",
        width: "80vw"

    }
    const notVisibleStyle = {
        // display: "none",
        width: "0",
        pointerEvents: "none"

    }

    const [isVisible, setVisibility] = useState(false)

    const toggleSideMenu = () => {
        setVisibility(!isVisible);
    }

    const [navBackground, setNavBackground] = useState(false);
    let location = useLocation();
    const setNavbar = () => {
        if (window.scrollY > 100) {
            setNavBackground(true)
        } else {
            setNavBackground(false)
        }
    }
    window.addEventListener('scroll', setNavbar);
    useEffect(() => {
        window.scrollTo(0, 0);
        setNavbar();
        // eslint-disable-next-line
    }, [location.pathname])

    return (
        <div className="navbar-container">
            <div className="navbar-left">
                <div className="logo-container">
                <img alt="" src="../../images/Alumlogo.png" width="100px"></img>
                </div>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li className="nav-link">
                        <NavLink to="/upload">Upload</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/login">Log-In</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/register">Sign-Up</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
