import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Services from '../components/About/Services';
import AboutHeader from '../components/About/AboutHeader';
import AboutInfo from '../components/About/AboutInfo';
import Footer from '../components/Footer';

export default class AboutUs extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <AboutHeader/>
                <Services/>
                <AboutInfo/>
                <Footer/>
            </>
        )
    }
}
