import React from "react";
import Card from "react-bootstrap/Card";

function Progress() {
  return (
    <Card>
      <Card.Body>
        <div className="title-container in-progress-title">
          <Card.Title>In Progress</Card.Title>
        </div>
        <div>
          <Card.Text>Get job interview</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Progress;
