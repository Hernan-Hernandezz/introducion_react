import React from "react";
const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      <span className="i"></span>
      <p>{props.text}</p>
      <span> X </span>
    </li>
  );
};

export { TodoItem };
