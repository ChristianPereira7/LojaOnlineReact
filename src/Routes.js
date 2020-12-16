import React from 'react';
import { Switch } from 'react-router-dom';

import RouteHandler from './components/partials/RouteHandler'; 

import Home from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';



export default () => {
    return (
        <Switch>
            <RouteHandler exact path="/">
                <Home/>
            </RouteHandler>

            <RouteHandler exact path="/about">
                <About/>/
            </RouteHandler>

            <RouteHandler exact path="/signin"> 
                <Signin/>
            </RouteHandler>

            <RouteHandler exact path="/signup"> 
                <SignUp/>
            </RouteHandler>

            <RouteHandler private exact path="/post-an-a"> 
                <About/>
            </RouteHandler>


            <RouteHandler>
                <NotFound/>
            </RouteHandler>
        </Switch>
    );
}