import React from "react";
import "@styles/TodoModal.scss";
const TodoModal = ({ todos, setTodos, visibility, setVisibility }) => {
  const addTodo = () => {
    const input = document.querySelector("#todo");
    const newTodos = [...todos];
    newTodos.push({ text: input.value, completed: false });
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
    input.value = "";
    setVisibility("desactive");
  };
  const hidden = () => setVisibility("desactive");
  return (
    <div className={"TodoModal-" + visibility}>
      <input
        type="text"
        placeholder="ingresa tu tarea"
        className="TodoModal-input"
        id="todo"
      />
      <button type="button" id="save" onClick={addTodo}>
        guardar
      </button>
      <button type="button" id="cancel" onClick={hidden}>
        cancelar
      </button>
    </div>
  );
};

export { TodoModal };
