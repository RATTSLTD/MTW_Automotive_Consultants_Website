import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import TrainingContent from '../components/Training/Training';
import Footer from '../components/Footer/Footer';
import SocialBar from '../components/SocialBar/SocialBar';

export default function TrainingResources (props){

    return(
        <>
            <NavBar/>
            <SocialBar/>
            <TrainingContent courses={props.courses}/>
            <Footer/>
        </>
    )
}