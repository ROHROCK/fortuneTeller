import React from 'react';
import './Navbar.css';
import { Link, NavLink } from "react-router-dom";
import {ReactComponent as Logo} from "../../Assets/Icons/logo.svg";
import {Animated} from "react-animated-css";

function navbar() {
    return (
        <Animated animationIn="fadeIn" isVisible={true}>
        <nav className="nav_Container">
            <div className="nav_Left">
                <Link to="/">
                    <Logo width="18vw" height="6vh"/>
                </Link>
            </div>
            <div className="nav_Right">
            <NavLink exact={true} activeClassName='selected' to='/'>
                <p data-text="Home" className="nav_Items nav_Items-hover">Home</p>
            </NavLink>
            <NavLink to='/about' activeClassName='selected'>
                <p data-text="About" className="nav_Items nav_Items-hover">About</p>
            </NavLink>
            </div>
        </nav>
        </Animated>
    )
}

export default navbar
