import React from "react";
import "../styles/range.scss";

export default function Range({ children }) {
  return (
    <div className="range-box">
      <div className="range-box-text">
        <h1>Browse the Range</h1>
        <p>Treating all skin co loprem lorem</p>
      </div>
      <div className="room-box">{children}</div>
    </div>
  );
}
