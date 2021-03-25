import React from "react";

export default function Section({ title, subtitle, dark, id, slides }) {
    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id}>
          <h1 style={{color: 'white' }}>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }
  