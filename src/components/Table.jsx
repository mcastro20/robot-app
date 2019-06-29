import React from "react";
import Square from "./Square";
import Robot from "./Robot";

function renderSquare(x, y, rp) {
  // const x = i % 5;
  // const y = Math.floor(i / 5);
  const isRobotHere =
    x === parseInt(rp.positionX) && y === parseInt(rp.positionY);
  const grey = (x + y) % 2 === 1;
  const piece = isRobotHere ? <Robot direction={rp.direction} /> : null;

  return (
    <div key={x + y} style={{ width: "20%", height: "20%" }}>
      <Square grey={grey} x={x} y={y}>
        {piece}
      </Square>
    </div>
  );
}

export default function Table({ robotPosition }) {
  const squares = [];

  for (let y = 4; y >= 0; y--) {
    for (let x = 0; x <= 4; x++) {
      squares.push(renderSquare(x, y, robotPosition));
    }
  }

  // for (let i = 24; i >= 0; i--) {
  //   squares.push(renderSquare(i, robotPosition));
  // }

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
