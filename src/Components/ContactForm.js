import React from "react";

export default function Section({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id} target="_blank">
           Please click the:
           <a href="http://tiny.cc/yhnqtz"> contact form link!</a>
      </div>
    </div>
  );
}
