import React from "react";
import "./Robot.css";

export default function Robot({ direction }) {
  return (
    <span
      role="img"
      aria-label="robot"
      className={direction}
      style={{
        position: "absolute",
        fontSize: "10vh"
      }}
    >
      🤖
    </span>
  );
}
