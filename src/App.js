import "./App.css";
import React, { Component } from "react";
import {useState} from "react";
import HeroSection from "./components/heroSection";
import Event from "./components/events";
import Carousel from "./components/Carousel";
import carouselData from "./data/carouselData.json"
import serviceData from "./data/serviceData.json"
import Services from "./components/Services"
import Started from "./components/Started"
import getStartedData from "./data/getStartedData.json"
import Join from "./components/Join";
import Footer from "./components/Footer"



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isReady: true
    }
  }

  render() {
    return(
      <div className="App">
        <HeroSection />
        <Event />
        <Carousel id= "Portfolio" data={carouselData.slides}/>
        <Services id= "Services" data={serviceData.services} />
        <Started id="Get-Started" data={getStartedData.started} />
        <Join  id="Contact-Us" />
        <Footer/>
      </div>
    )
  }

}

export default App;


