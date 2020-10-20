import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin/';
import NotFound from './pages/NotFound';



export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/about">
                <About/>/
            </Route>

            <Route exact path="/signin"> 
                <Signin/>
            </Route>

            <Route>
                <NotFound/>
            </Route>
        </Switch>
    );
}