import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.scss';

import Header from '../Header/Header';
import HomePage from '../../Pages/HomePage';

const App = () => (
    <Router>
        <Header />
        <Switch>
            <Route path = '/' component = {HomePage} exact/>
        </Switch>
    </Router>
)
export default App;