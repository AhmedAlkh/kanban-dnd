import React, { useState } from "react";
import Card from "react-bootstrap/Card";

function Todo() {
  const [todos, setTodos] = useState(["Get a full night's sleep"]);
  const [isCardEmpty, setIsCardEmpty] = useState(false);

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragEnter = (event) => {
    setIsCardEmpty(true);
  };

  const handleDragLeave = (event) => {
    setIsCardEmpty(false);
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

    setIsCardEmpty(false);
  };

  const handleDragEnd = (event) => {
    const dropzone = event.target.closest(".drop-element-todo");

    if (!dropzone) {
      return;
    }

    if (isCardEmpty) {
      setTodos([...todos]);
      dropzone.appendChild(event.target);
      setIsCardEmpty(false);
    } else {
      const data = event.dataTransfer.getData("text/plain");
      const movedTodo = todos.splice(data.substring(5), 1);
      const newTodos = [...todos];
      const index = Array.prototype.indexOf.call(
        dropzone.children,
        event.target
      );
      newTodos.splice(index, 0, movedTodo[0]);
      setTodos(newTodos);
    }
  };

  return (
    <Card>
      <Card.Body>
        <div className="title-container todo-title">
          <Card.Title>To do</Card.Title>
        </div>
        <div
          className={`drop-element-todo${isCardEmpty ? " is-empty" : ""}`}
          droppable="true"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
        >
          {todos.map((todo, index) => (
            <Card.Text
              key={`todo-${index}`}
              id={`todo-${index}`}
              className="drag-element-todo"
              draggable="true"
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              {todo}
            </Card.Text>
          ))}
          {isCardEmpty && <div className="placeholder">Drop items here</div>}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Todo;
