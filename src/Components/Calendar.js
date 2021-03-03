import React from "react";

export default function Calendar({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
        <div data-tockify-calendar="spirited" data-tockify-component="calendar"></div>
    </div>
    </div>
  );
}