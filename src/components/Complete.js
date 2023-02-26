import React from "react";
import Card from "react-bootstrap/Card";

function Complete() {
  return (
    <Card>
      <Card.Body>
        <div className="title-container complete-title">
          <Card.Title>Complete</Card.Title>
        </div>
        <div>
          <Card.Text>Build kanban board app</Card.Text>
          <Card.Text>Add drag-and-drop functionality</Card.Text>
          <Card.Text>Upload to GitHub pages</Card.Text>
          <Card.Text>Submit project</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Complete;
