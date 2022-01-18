import React from "react";
const TodoCounter = ({ totalTodos, todoCompleted }) => {
  return (
    <h2 className="TodoCounter">
      Has completado {todoCompleted} de {totalTodos} TODOs
    </h2>
  );
};

export { TodoCounter };
