import React from "react";
import Iframe from 'react-iframe'

export default function ContactForm({ title, dark, id, onboardEnabled, onboard }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id} target="_blank">
           {title} <br></br>
           {onboardEnabled && <a href="http://tiny.cc/yhnqtz"> <button onClick={onboard} class="onboarding"> Onboarding</button> </a>}
           {!onboardEnabled && <a href="https://discord.gg/SMUAaSUA">Join us on Discord</a>}
           {!onboardEnabled && <Iframe url="http://tiny.cc/yhnqtz"
            position="absolute"
            width="100%"
            id="myId"
            className="myClassname"
            height="100%"
            styles={{height: "100px"}}/> }
      </div>
    </div>
  );
}