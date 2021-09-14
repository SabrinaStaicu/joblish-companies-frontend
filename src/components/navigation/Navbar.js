import React, {useEffect, useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import logo from '../../images/logo.svg';
import AuthService from "../../service/AuthService";

const Navbar = ({ homePosition }) => {
    const history = useHistory();
    const [position, setPosition] = useState("static")
    const [stickyColor, setStickyColor] = useState("rgba(0, 0, 255, 0.534)")
    const [stickyBorder, setStickyBorder] = useState("transparent")

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 90) {
            if (window.location.pathname === "/") {
                setPosition("fixed")
            }
            else {
                setPosition("sticky")
            }
            setStickyColor("white")
            setStickyBorder("1px solid rgba(0, 0, 255, 0.534)")
        }
        else {
            if (window.location.pathname === "/") {
                setPosition(homePosition)
            }
            else {
                setPosition("static")
            }
            // setStickyColor(color)
            setStickyBorder("transparent")
        }
    }

    useEffect(() => {
        if (window.location.pathname === "/") {
            setPosition(homePosition)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    const logout = () => {
        AuthService.logout();
        history.push("/login")
    }

    return (
        <nav style={{backgroundColor:"" + stickyColor, position:"" + position, zIndex:"3", borderBottom: stickyBorder , animation:position === "sticky" ? "fadein 0.3s" : "none"}}>
            <div className="logo">
                <Link to="/" style={{display:"inline-block"}}><img src={logo} style={{zIndex:"2", width:"50px",display:"inline-block"}}  alt="joblish logo"/>joblish</Link>
            </div>
            {
                AuthService.getCurrentUser() ? (
                    <ul>
                        <li><Link to="/profile">Company</Link></li>
                        <li><Link onClick={logout}>Logout</Link></li>
                    </ul>
                ) : (
                    <ul>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </ul>
                )
            }
        </nav >
    )
};

export default Navbar;