import React from "react";

export default function Square({ grey, children, x, y }) {
  const fill = grey ? "grey" : "white";
  const stroke = grey ? "white" : "grey";

  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      ({x},{y}){children}
    </div>
  );
}
