import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About Us"
          subtitle={aboutUsText}
          dark={false}
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
          dark={false}
          id="section3"
        />
        <Section
          title="Gallery"
          dark={false}
          id="section4"
        />
        <Section
          title="Join Us"
          subtitle={joinUs}
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}

export default App;