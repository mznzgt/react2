import React, {Component} from "react";
import {Router, Route, Switch, HashRouter} from "react-router-dom";
import history from "./History";
import HomeOne from "./components/HomeOne";
import HomeTwo from "./components/HomeTwo";
import HomeThree from "./components/HomeThree";
import ProjectDetails from "./components/ProjectDetails";
import Project from "./components/Project";
import About from "./components/About";
import Agent from "./components/Agent";
import Property from "./components/Property";
import PropertyTwo from "./components/PropertyTwo";
import PropertyDetails from "./components/PropertyDetails";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <HashRouter basename="/">
                    <Switch>
                        <Route exact path={'/'} render={(props) => (<HomeOne {...props} />)} />
                        <Route exact path={'/home-one'} render={(props) => (<HomeOne {...props} />)} />
                        <Route exact path={'/home-two'} render={(props) => (<HomeTwo {...props } />)} />
                        <Route exact path={'/home-three'} render={(props) => (<HomeThree {...props } />)} />
                        <Route exact path={'/project-details'} render={(props) => (<ProjectDetails {...props } />)} />
                        <Route exact path={'/project'} render={(props) => (<Project {...props } />)} />
                        <Route exact path={'/about'} render={(props) => (<About {...props } />)} />
                        <Route exact path={'/agent'} render={(props) => (<Agent {...props } />)} />
                        <Route exact path={'/agent'} render={(props) => (<Agent {...props } />)} />
                        <Route exact path={'/property-one'} render={(props) => (<Property {...props } />)} />
                        <Route exact path={'/property-two'} render={(props) => (<PropertyTwo {...props } />)} />
                        <Route exact path={'/property-details'} render={(props) => (<PropertyDetails {...props } />)} />
                    </Switch>
                </HashRouter>
            </Router>
        )
    }
}

export default Routes;