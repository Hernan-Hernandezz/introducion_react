import React from "react";
import "@styles/TodoItem.scss";
const TodoItem = ({ text, completed }) => {
  const onComplete = () => {
    console.log(`ya completaste el ToDo ${text}`);
  };
  const onDelete = () => {
    console.log(`eliminaste el  ToDo ${text}`);
  };
  return (
    <li className="TodoItem">
      <span className="Icon Icon-delete" onClick={onDelete}>
        X
      </span>
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        ✓
      </span>
      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>
        {text}
      </p>
    </li>
  );
};

export { TodoItem };
