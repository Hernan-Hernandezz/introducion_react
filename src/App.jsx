import React from "react";
import { TodoCounter } from "@components/TodoCounter.jsx";
import { TodoList } from "@components/TodoList.jsx";
import { TodoItem } from "@components/TodoItem.jsx";
import { TodoSearch } from "@components/TodoSearch.jsx";
import { CreateTodoButton } from "@components/CreateTodoButton";
import { TodoModal } from "@components/TodoModal";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true, key: 1 },
  { text: "Tomar el cursso de intro a React", completed: true, key: 2 },
  { text: "Llorar con la llorona", completed: false, key: 3 },
  { text: "LALALALAA", completed: false, key: 4 },
];
const App = () => {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parcedTodos;
  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parcedTodos = [];
  } else {
    parcedTodos = JSON.parse(localStorageTodos);
  }

  const [search, setSearch] = React.useState("");
  const [todos, setTodos] = React.useState(parcedTodos);
  //const [todoCompleted, setTodoCompleted] = React.useState("");
  const todoCompleted = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const equate = (todo) => {
    const text = todo.text.toLowerCase();
    if (text.includes(search.toLowerCase())) {
      return (
        <TodoItem
          key={todo.key}
          text={todo.text}
          completed={todo.completed}
          todos={todos}
          setTodos={setTodos}
        />
      );
    }
  };
  return (
    <React.Fragment>
      <TodoCounter totalTodos={totalTodos} todoCompleted={todoCompleted} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>{todos.map((todo) => equate(todo))}</TodoList>
      <CreateTodoButton />
      <TodoModal />
    </React.Fragment>
  );
};

export default App;
