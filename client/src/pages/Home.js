import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/Home/HeroSection';
import InfoSection from '../components/Home/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Home/InfoSection/Data';
import Footer from '../components/Footer';

export default class Home extends Component{
  render(){
    return(
      <div className="content">
        <NavBar/>
        <HeroSection/>
        <InfoSection{...homeObjOne}/>
        <InfoSection{...homeObjTwo}/>
        <InfoSection{...homeObjThree}/>
        <Footer/>
      </div>     
    )
  }  
}