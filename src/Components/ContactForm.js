import React from "react";

export default function Section({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id} target="_blank">
           Here is where you can join us:
           <a href="http://tiny.cc/yhnqtz"><button>Onboarding</button></a>
      </div>
    </div>
  );
}
