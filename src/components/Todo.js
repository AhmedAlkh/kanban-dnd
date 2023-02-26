import React from "react";
import Card from "react-bootstrap/Card";

function Todo() {
  return (
    <Card>
      <Card.Body>
        <div className="title-container todo-title">
          <Card.Title>To do</Card.Title>
        </div>
        <div>
          <Card.Text>Get full night's rest</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Todo;
