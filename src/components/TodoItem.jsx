import React from "react";
import "@styles/TodoItem.scss";
const TodoItem = ({ text, completed, todos, setTodos }) => {
  const onComplete = () => {
    const todosIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    if (!newTodos[todosIndex].completed) {
      newTodos[todosIndex].completed = true;
    } else {
      newTodos[todosIndex].completed = false;
    }
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  const onDelete = () => {
    const todosIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todosIndex, 1);
    localStorage.setItem("TODOS_V1", JSON.stringify(newTodos));
    setTodos(newTodos);
  };
  return (
    <li className="TodoItem" key={text}>
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
