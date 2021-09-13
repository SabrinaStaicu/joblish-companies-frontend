import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import Footer from "../navigation/Footer";
import Dashboard from '../dashboard/Dashboard';
import Settings from '../dashboard/Settings';

const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route path={"/"} exact component={HomePage} />
                    <Route path={"/dashboard"} component={Dashboard} />
                    <Route path={"/settings"} component={Settings} />
                </Switch>
            </Router>
            <Footer/>
        </>
    );
};

export default Routes;