import React from 'react';
import SignIn from '../components/SignIn';
import NavBar from '../components/NavBar';
import TrainingContent from '../components/Training';
import Footer from '../components/Footer';

export default function TrainingResources (props){

    return(
        <>
            <NavBar/>
            {/* <SignIn/> */}
            <TrainingContent courses={props.courses}/>
            <Footer/>
        </>
    )
}