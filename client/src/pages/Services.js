import React, {Component} from 'react';
import NavBar from '../components/NavBar';
import ServicesHeader from '../components/Services/ServicesHeader';
import Services from '../components/Services';
import { ServicesObjOne, ServicesObjTwo, ServicesObjThree, ServicesObjFour } from '../components/Services/Data';
import Footer from '../components/Footer';
export default class Home extends Component{
  render(){
    return(
      <div className="content">
        <NavBar/>
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