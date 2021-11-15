import React, {Component} from 'react';
import NavBar from '../components/NavBar/NavBar';
import ServicesHeader from '../components/Services/ServicesHeader/ServicesHeader';
import Services from '../components/Services/Services';
import { ServicesObjOne, ServicesObjTwo, ServicesObjThree, ServicesObjFour } from '../components/Services/Data';
import Footer from '../components/Footer/Footer';
import SocialBar from '../components/SocialBar/SocialBar';
export default class Home extends Component{
  render(){
    return(
      <div className="content">
        <NavBar/>
        <SocialBar/>
        <ServicesHeader/>
        <Services{...ServicesObjOne}/>
        <Services{...ServicesObjTwo}/>
        <Services{...ServicesObjThree}/>
        <Services{...ServicesObjFour}/>
        <Footer/>
      </div>     
    )
  }  
}