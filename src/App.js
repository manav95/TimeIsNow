import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import dummyText from "./DummyText";
class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Section
          title="About Us"
          subtitle={dummyText}
          dark={false}
          id="section1"
        />
        <Section
          title="Events"
          subtitle={dummyText}
          dark={false}
          id="section2"
        />
        <Section
          title="A Message from Gaia"
          subtitle={dummyText}
          dark={false}
          id="section3"
        />
        <Section
          title="Gallery"
          subtitle={dummyText}
          dark={false}
          id="section4"
        />
        <Section
          title="Join Us"
          subtitle={dummyText}
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}

export default App;