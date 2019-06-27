import React from "react";
import Square from "./Square";
import Robot from "./Robot";

function renderSquare(i, [robotX, robotY]) {
  const x = i % 5;
  const y = Math.floor(i / 5);
  const isRobotHere = x === robotX && y === robotY;
  const black = (x + y) % 2 === 1;
  const piece = isRobotHere ? <Robot /> : null;

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
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      {squares}
    </div>
  );
}
