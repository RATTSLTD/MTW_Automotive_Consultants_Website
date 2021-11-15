import React, {Component} from 'react';
import NavBar from '../components/NavBar/NavBar';
import HeroSection from '../components/Home/HeroSection/HeroSection';
import InfoSection from '../components/Home/InfoSection/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/Home/InfoSection/Data';
import Footer from '../components/Footer/Footer';
import SocialBar from '../components/SocialBar/SocialBar';

export default class Home extends Component{
  render(){
    return(
      <div className="content">
        <NavBar/>
        <SocialBar/>
        <HeroSection/>
        <InfoSection{...homeObjOne}/>
        <InfoSection{...homeObjTwo}/>
        <InfoSection{...homeObjThree}/>
        <Footer/>
      </div>     
    )
  }  
}