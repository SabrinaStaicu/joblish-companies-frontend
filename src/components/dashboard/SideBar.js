import React from 'react'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { NavLink, useLocation } from "react-router-dom";
import { useState } from 'react';
import logo from '../../images/logo.svg';

const SideBar = () => {

    const [size, setSize] = useState("70px")

    const location = useLocation();

    const { pathname } = location;

    const handleSizeUp = () => {
        setSize("300px")
    }

    const handleSizeDown = () => {
        setSize("70px")
    }

    const splitLocation = pathname.split("/");
    console.log(splitLocation)

    return (
        <div className="navigation" onMouseEnter={handleSizeUp} onMouseLeave={handleSizeDown} style={{width:"" + size}}>
            <ul>
                <li style={{marginBottom:"40px"}}>
                    <div className="logo">
                        <NavLink to="/" style={{display:"inline-block", marginLeft:"10%"}}><img src={logo} style={{zIndex:"2", width:"50px",display:"inline-block", alignSelf:"center"}}  alt="joblish logo"/></NavLink>
                    </div>
                </li>
                <li className={splitLocation[1] === "dashboard" ? "list active" : "list"}>
                    <NavLink to="/dashboard">
                        <span className="icon"><HomeOutlinedIcon fontSize="large"/></span>
                        <span className="title">Dashboard</span>
                    </NavLink>
                </li>
                <li className={splitLocation[1] === "company-applicants" ? "list active" : "list"}>
                    <NavLink to="company-applicants">
                        <span className="icon"><PeopleAltOutlinedIcon fontSize="large"/></span>
                        <span className="title">Applicants</span>
                    </NavLink>
                </li>
                <li className={splitLocation[1] === "settings" ? "list active" : "list"}>
                    <NavLink to="/settings">
                        <span className="icon"><SettingsOutlinedIcon fontSize="large"/></span>
                        <span className="title">Settings</span>
                    </NavLink>
                </li>
                <li className={splitLocation[1] === "logout" ? "list active" : "list"}>
                    <NavLink to="#">
                        <span className="icon"><ExitToAppOutlinedIcon fontSize="large"/></span>
                        <span className="title">Logout</span>
                    </NavLink>
                </li>
            </ul>
            
        </div>
    )
}

export default SideBar
