import React, {useState, useEffect} from 'react';
import UserDetails from './UserDetails';
import Navbar from '../navigation/Navbar';
import UserService from '../../service/UserService';
import {useLocation} from "react-router-dom";

export default function UserPage() {
    const [user, setUser] = useState({});
    const location = useLocation();
    const id = location.state?.userId;

    useEffect(() => {
        UserService.getUserById(id).then(res => {
            setUser(res.data)});
    },[])

    return (
        <>
            <div className="user-page" style={{height: '100%', width: '100%', display: 'grid'}}>
                <Navbar/>
                <div className="jobsTop">
                    <h1 style={{color:"white"}}>User profile</h1>
                </div>
                <UserDetails user={user} />
            </div>
        </>
    )
}

