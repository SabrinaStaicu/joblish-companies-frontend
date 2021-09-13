import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../../images/logo.svg';

const Navbar = ({ color, homePosition, userHasApplied, applyBtn }) => {
    // const loggedIn = !!(localStorage.getItem("joblishUser"))
    // const loggedInComp = !!(localStorage.getItem("joblisComp"))

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
            setStickyColor(color)
            setStickyBorder("transparent")
        }
    }

    useEffect(() => {
        if (window.location.pathname === "/") {
            setPosition(homePosition)
        }
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav style={{backgroundColor:"" + stickyColor, position:"" + position, zIndex:"3", borderBottom: stickyBorder , animation:position === "sticky" ? "fadein 0.3s" : "none"}}>
            <div className="logo">
                <Link to="/" style={{display:"inline-block"}}><img src={logo} style={{zIndex:"2", width:"50px",display:"inline-block"}}  alt="joblish logo"/>joblish</Link>
            </div>
            <ul>
                <li><Link to="/profile">Company</Link></li>
            </ul>
            {/*{*/}
            {/*    // loggedInComp ? (<ul>*/}
            {/*    //     <li><Link to="/jobs">Jobs</Link></li>*/}
            {/*    //     <li><Link to="/" onClick={() => { localStorage.clear() }}>Logout</Link></li>*/}
            {/*    // </ul>) : (*/}
            {/*    //*/}
            {/*    //     loggedIn ? (*/}
            {/*            <ul>*/}
            {/*                <li><Link to="/jobs">Jobs</Link></li>*/}
            {/*                <li><Link to="/account">My profile</Link></li>*/}
            {/*                <li><Link to="/user-applications">Applications</Link></li>*/}
            {/*                <li><Link to="/companies">Companies</Link></li>*/}
            {/*                <li><Link to="/" onClick={() => { localStorage.clear() }}>Logout</Link></li>*/}
            {/*                /!*{!userHasApplied  && position == "sticky" && window.location.pathname.match("/job/") ? (*!/*/}
            {/*                /!*    <li> <div onClick={applyBtn} className="apply-nav"><SendIcon /><h5 className="btn-title">Apply</h5></div></li>*!/*/}
            {/*                /!*) : (*!/*/}
            {/*                /!*    ""*!/*/}
            {/*                /!*)}*!/*/}
            {/*            </ul>*/}
            {/*        /!*) : (*!/*/}
            {/*        /!*    <ul>*!/*/}
            {/*        /!*        <li><Link to="/jobs">Jobs</Link></li>*!/*/}
            {/*        /!*        <li><Link to="/login">Login</Link></li>*!/*/}
            {/*        /!*        <li><Link to="/register">Register</Link></li>*!/*/}
            {/*        /!*    </ul>*!/*/}
            {/*        /!*))*!/*/}
            {/*}*/}
        </nav >
    )
};

export default Navbar;