import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import Calendar from "./Components/Calendar";
import Gallery from "./Components/Gallery"
import AboutUs from "./Components/AboutUs"
import Message from "./Components/Message"
import aboutUsText from './aboutUsText';
import message from './message';

class App extends Component {
  constructor() {
    super();
    this.state = {onboardEnabled: true};
  }

  onboard() { 
    this.setState({onboardEnabled: false});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <AboutUs
          title="About Us"
          id="section1"
        />
        <Calendar
          title="Calendar"
          dark={false}
          id="section2"
        />
        <Message
          title="A Message from Gaia"
          subtitle={message}
          id="section3"
        />
        <Gallery
          title="Gallery"
          dark={false}
          id="section4"
        />
        <ContactForm
          title="Join Us"
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}

export default App;