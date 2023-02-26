import React from "react";
import Card from "react-bootstrap/Card";

function Complete() {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(data);
    const dropzone = event.target;

    // Get the center point of the target element
    const targetRect = dropzone.getBoundingClientRect();
    const targetCenter = targetRect.y + targetRect.height / 2;

    // Get the mouse cursor position relative to the center point of the target element
    const cursorPosition = event.clientY - targetCenter;

    // Append the draggable element before or after the target element based on the cursor position
    if (cursorPosition < 0) {
      dropzone.parentNode.insertBefore(draggableElement, dropzone);
    } else {
      dropzone.parentNode.insertBefore(draggableElement, dropzone.nextSibling);
    }
  };

  return (
    <Card>
      <Card.Body>
        <div className="title-container complete-title">
          <Card.Title>Complete</Card.Title>
        </div>
        <div
          className="drop-element-complete"
          droppable="true"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Card.Text
            id="complete-text-1"
            className="drag-element-complete"
            draggable="true"
            onDragStart={handleDragStart}
          >
            Build kanban board app
          </Card.Text>
          <Card.Text
            id="complete-text-2"
            className="drag-element-complete"
            draggable="true"
            onDragStart={handleDragStart}
          >
            Add drag-and-drop functionality
          </Card.Text>
          <Card.Text
            id="complete-text-3"
            className="drag-element-complete"
            draggable="true"
            onDragStart={handleDragStart}
          >
            Upload to GitHub pages
          </Card.Text>
          <Card.Text
            id="complete-text-4"
            className="drag-element-complete"
            draggable="true"
            onDragStart={handleDragStart}
          >
            Submit project
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Complete;
