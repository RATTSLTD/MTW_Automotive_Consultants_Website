import React, { Component } from 'react'
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom'
import Home from './components/Home.js'
import AboutUs from './pages/AboutUs.js'
import TrainingResources from './pages/TrainingResources.js'
import ScrollToTop from './components/ScrollTop.js'

export default class Routes extends Component {
    render(){
    return(
        <Router>
                <Switch>
                    <Route exact path='/'> <Redirect to="/home"/></Route>
                    <Route exact path='/home'> <Home/> </Route>
                    <Route exact path='/about'> <AboutUs/> </Route>
                    <Route exact path='/training'> <TrainingResources/> </Route>
                </Switch>
        </Router>
    )}
}
