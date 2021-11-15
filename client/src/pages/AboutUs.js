import React, { Component } from 'react';
import NavBar from '../components/NavBar/NavBar';
import Services from '../components/About/ServicesQuickAccess/ServicesQuickAccess';
import AboutHeader from '../components/About/AboutHeader/AboutHeader';
import AboutInfo from '../components/About/AboutInfo/AboutInfo';
import Footer from '../components/Footer/Footer';
import SocialBar from '../components/SocialBar/SocialBar';

export default class AboutUs extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <SocialBar/>
                <AboutHeader/>
                <Services/>
                <AboutInfo/>
                <Footer/>
            </>
        )
    }
}
