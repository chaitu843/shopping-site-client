import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';

import Header from '../Header/Header';
import LandingPage from '../../Pages/LandingPage/LandingPage';
import HomePage from '../../Pages/HomePage/HomePage';
import ProductCatalogue from '../../Pages/ProductCatalogue/ProductCatalogue';
import ProductOverview from '../../Pages/ProductOverview/ProductOverview';

const App = () => (
    <Router>
        <Header/>
        <Switch>
            <Route path = '/' component = {LandingPage} exact/>
            <Route path = '/home' component = {HomePage} />
            <Route path = '/products/product/:id' component = {ProductOverview} />
            <Route path = '/products/:category' component = {ProductCatalogue} />
        </Switch>
    </Router>
)
export default App;