import React from "react";
import Square from "./Square";
import Robot from "./Robot";

function renderSquare(i, [robotX, robotY, robotF]) {
  const x = i % 5;
  const y = Math.floor(i / 5);
  const isRobotHere = x === robotX && y === robotY;
  const black = (x + y) % 2 === 1;
  const piece = isRobotHere ? <Robot direction={robotF}/> : null;

  return (
    <div key={i} style={{ width: "20%", height: "20%" }}>
      <Square black={black}>{piece}</Square>
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
        width: "80%",
        height: "80%",
        display: "flex",
        flexWrap: "wrap",
        border: "2px solid"
      }}
    >
      {squares}
    </div>
  );
}
