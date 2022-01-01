import React from "react";
import "@styles/TodoItem.scss";
import checkIcon from "@logos/check.svg";
const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <span className="Icon Icon-delete"> X </span>
      <span className="Icon Icon-Check">
        <img src={checkIcon} />
      </span>
      <p>{props.text}</p>
    </li>
  );
};

export { TodoItem };
