import Todo from "./Todo";
import Progress from "./In-progress";
import Complete from "./Complete";

function Grid() {
  return (
    <div className="grid-container">
      <div className="grid">
        <Todo />
        <Progress />
        <Complete />
      </div>
    </div>
  );
}

export default Grid;
