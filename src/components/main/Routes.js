import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Footer from "../navigation/Footer";
import Dashboard from '../dashboard/Dashboard';
import Settings from '../dashboard/Settings';
import Users from '../applicant/Users';
import Login from "../auth/Login";
import Register from "../auth/Register";
import EditJob from '../dashboard/EditJob';


const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/company-applicants" component={Users} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register}/>
                    <Route path="/edit-job" component={EditJob}/>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
};

export default Routes;