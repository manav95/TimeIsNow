import React from "react";

export default function Calendar({ title, dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
        <h1>{title}</h1><br></br>  
        <div data-tockify-component="calendar" data-tockify-calendar="timeisnow"></div>
<script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
    </div>
    </div>
  );
}