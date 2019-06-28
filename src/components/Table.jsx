import React from "react";
import Square from "./Square";
import Robot from "./Robot";

function renderSquare(i, rp) {
  const x = i % 5;
  const y = Math.floor(i / 5);
  const isRobotHere =
    x === parseInt(rp.positionX) && y === parseInt(rp.positionY);
  const grey = (x + y) % 2 === 1;
  const piece = isRobotHere ? <Robot direction={rp.direction} /> : null;

  return (
    <div key={i} style={{ width: "20%", height: "20%" }}>
      <Square grey={grey}>{piece}</Square>
    </div>
  );
}

export default function Table({ robotPosition }) {
  const squares = [];
  for (let i = 0; i < 25; i++) {
    squares.push(renderSquare(i, robotPosition));
  }

  return (
    <div
      style={{
        float: "left",
        width: "70%",
        height: "90%",
        display: "flex",
        flexWrap: "wrap",
        border: "2px solid"
      }}
    >
      {squares}
    </div>
  );
}
