import React from "react";
import "@styles/TodoItem.scss";
const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <span className="Icon Icon-delete"> X </span>
      <span className="Icon Icon-check">✓</span>
      <p>{props.text}</p>
    </li>
  );
};

export { TodoItem };
