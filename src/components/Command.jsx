import React from "react";
import { Row, Col, Button } from "reactstrap";
import compass from "../img/compass.png";

export default function Command({
  report,
  move,
  left,
  right,
  isRobotPlaced,
  toggleModalPlaceInput
}) {
  return (
    <div
      style={{
        height: "90%",
        border: "2px solid",
        textAlign: "center"
      }}
    >
      <Row className="mb-4 mt-4">
        <Col>
          <img src={compass} alt="Compass" style={{height: "20vh"}}/>
        </Col>
      </Row>
      <Row className="mb-4 mt-4">
        <Col>
          <Button
            color="primary"
            className="mr-2"
            onClick={toggleModalPlaceInput}
            name="place"
          >
            Place
          </Button>
          <Button
            color="primary"
            className="ml-2"
            onClick={report}
            disabled={isRobotPlaced ? false : true}
            name="report"
          >
            Report
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            color="primary"
            onClick={move}
            disabled={isRobotPlaced ? false : true}
            name="move"
          >
            Move 🠝
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            color="primary"
            onClick={left}
            disabled={isRobotPlaced ? false : true}
            name="left"
          >
            ⟲ Left
          </Button>
        </Col>
        <Col>
          <Button
            color="primary"
            onClick={right}
            disabled={isRobotPlaced ? false : true}
            name="right"
          >
            Right ⟳
          </Button>
        </Col>
      </Row>
    </div>
  );
}
