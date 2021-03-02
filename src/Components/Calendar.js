import React from "react";

export default function Calendar({ dark }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div data-tockify-calendar="spirited" data-tockify-component="calendar"></div>
    </div>
  );
}