import React from "react";

export default function Calendar({ dark, id }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
        <div data-tockify-component="calendar" data-tockify-calendar="timeisnow"></div>
<script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
    </div>
    </div>
  );
}