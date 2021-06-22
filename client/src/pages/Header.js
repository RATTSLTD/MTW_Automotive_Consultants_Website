import React, {Component} from 'react';
import {Button} from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch, Link, Redirect } from 'react-router-dom'
import Home from './Home.js';
import AboutUs from './AboutUs.js';
import TrainingResources from './TrainingResources.js';
import $ from 'jquery';
import Anilogo from '../../../../public/images/TransAnimatedLogoGif.gif';
import Logo from '../../../../public/images/LogoTran.png';
import Headroom from 'react-headroom';

export default function Header(){
    return(            
        <Router>
            <Headroom style={{}}>
                <div className="header" style={{zIndex: 1, top: '0', left: '0', bottom: '0', width: '100%', maxHeight: "160px", backgroundColor:"rgba(255, 212, 174, 0.267)"}}>
                    <img className="logo" src={Anilogo} width="14%" alt={Logo} style={{float:'left'}}/>
                    <div className="navButtons" style={{float: 'right', paddingRight: '10%', paddingTop: '40px'}}>
                        <Button color="black" style={{fontSize: '17px', paddingLeft: '30px'}} component={Link} to="/home">HOME</Button>
                        <Button color="black" style={{fontSize: '17px', paddingLeft: '30px'}} component={Link} to="/about">ABOUT US</Button>
                        <Button color="black" style={{fontSize: '17px', paddingLeft: '30px'}}  component={Link} to="/training">TRAINING RESOURCES</Button>
                    </div>
                </div>
            </Headroom>
            <Switch>
                <Route exact path='/'> <Redirect to="/home"/></Route>
                <Route exact path='/home'> <Home/> </Route>
                <Route exact path='/about'> <AboutUs/> </Route>
                <Route exact path='/training'> <TrainingResources/> </Route>
            </Switch>
        </Router>
    )
}