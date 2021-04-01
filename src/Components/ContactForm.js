import React from "react";
import Iframe from 'react-iframe'

export default function ContactForm({ title, dark, id, onboardEnabled, onboard }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id} target="_blank">
           {title} <br></br>
           {onboardEnabled && <button onClick={onboard} class="onboarding"> Onboarding</button>}
           {!onboardEnabled && <a href="https://discord.gg/SMUAaSUA">Join us on Discord</a>}
           {!onboardEnabled && <Iframe url="https://us7.list-manage.com/contact-form?u=e1e257145a4a30cfd2bf75ef6&form_id=13473e90a944f78f2592a96f9e26121e"
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