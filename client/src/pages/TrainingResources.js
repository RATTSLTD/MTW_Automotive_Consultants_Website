import React from 'react';
import NavBar from '../components/NavBar';
import TrainingContent from '../components/Training';
import Footer from '../components/Footer';

export default function TrainingResources (props){

    return(
        <>
            <NavBar/>
            <TrainingContent courses={props.courses}/>
            <Footer/>
        </>
    )
}