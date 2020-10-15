import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home';
import { history } from './Component/HistoryUtil';
import './App.css';
import Dashboard from "./Component/dashboard";
import {withAlert} from "react-alert";
import Addusers from "./Component/addusers";

class App extends React.Component {
    render() {
        return (
            <div className = "App">
                <Router history = {history}>
                    <Switch>
                        <Route exact path = "/signin" component = {props => <Home {...props} alert={this.props.alert} />} />
                        <Route path = "/dashboard" component = {props => <Dashboard {...props} alert={this.props.alert} />} />
                        <Route path = "/addusers" component={props => <Addusers {...props} alert={this.props.alert} />} />
                    </Switch>
                </Router>
            </div>
        );
    };
}

export default withAlert()(App);
