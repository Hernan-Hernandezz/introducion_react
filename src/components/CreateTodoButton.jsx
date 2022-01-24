import React from "react";
import "@styles/CreateTodoButton.scss";
const CreateTodoButton = ({ setVisibility }) => {
  const openModal = () => {
    setVisibility("active");
  };

  return (
    <button className="CreateTodoButton" onClick={openModal}>
      +
    </button>
  );
};

export { CreateTodoButton };
