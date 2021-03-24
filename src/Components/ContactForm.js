import React from "react";

export default function Section({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id} target="_blank">
           Join Us:
           <input type="button" onclick="http://tiny.cc/yhnqtz';" value="Onboarding" />
      </div>
    </div>
  );
}
