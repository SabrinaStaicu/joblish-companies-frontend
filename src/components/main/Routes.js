import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./HomePage";
import Footer from "../navigation/Footer";
import Dashboard from '../dashboard/Dashboard';
import Settings from '../dashboard/Settings';
import Users from '../applicant/Users';
import Login from "../auth/Login";
import Register from "../auth/Register";
import EditJob from '../dashboard/EditJob';
import AddJob from '../dashboard/AddJob';
import PrivateRoute from '../../util/PrivateRoute';
import UserPage from '../user/UserPage';


const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/settings" component={Settings} />
                    <PrivateRoute path="/company-applicants" component={Users} />
                    <PrivateRoute path="/edit-job" component={EditJob} />
                    <PrivateRoute path="/add-job" component={AddJob} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register}/>
                    <Route path="/user" component={UserPage}/>
                </Switch>
            </Router>
        <Footer/>
        </>
    );
};

export default Routes;