import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import Calendar from "./Components/Calendar";
import Gallery from "./Components/Gallery"
import aboutUsText from './aboutUsText';
import message from './message';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About Us"
          subtitle={aboutUsText}
          id="section1"
        />
        <Calendar
          title="Calendar"
          dark={false}
          id="section2"
        />
        <Section
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