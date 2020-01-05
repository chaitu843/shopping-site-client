import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';

import Header from '../Header/Header';
import LandingPage from '../../Pages/LandingPage';
import HomePage from '../../Pages/HomePage';
import ProductLanding from '../../Pages/ProductLanding';

const App = () => (
    <Router>
        <Header/>
        <Switch>
            <Route path = '/' component = {LandingPage} exact/>
            <Route path = '/home' component = {HomePage} />
            <Route path = '/products/:category' component = {ProductLanding} />
        </Switch>
    </Router>
)
export default App;