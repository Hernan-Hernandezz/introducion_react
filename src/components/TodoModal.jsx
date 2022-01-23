import React from "react";
import "@styles/TodoModal.scss";
const TodoModal = () => {
  return (
    <div className="TodoModal">
      <input
        type="text"
        placeholder="ingresa tu tarea"
        className="TodoModal-input"
      />
    </div>
  );
};

export { TodoModal };
