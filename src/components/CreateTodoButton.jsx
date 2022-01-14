import React from "react";
import "@styles/CreateTodoButton.scss";
const CreateTodoButton = (props) => {
  const onClickButton = (message) => {
    console.log(message);
  };

  return (
    <button
      className="CreateTodoButton"
      onClick={() => onClickButton("Abrir modal")}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
