import React from "react";

export default function Section({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id} target="_blank">
           Here is where you can join us: <br></br>
           <a href="http://tiny.cc/yhnqtz"><button class="onboarding">Onboarding</button></a>
      </div>
    </div>
  );
}
