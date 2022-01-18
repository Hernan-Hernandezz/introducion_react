import React from "react";
import { TodoCounter } from "@components/TodoCounter.jsx";
import { TodoList } from "@components/TodoList.jsx";
import { TodoItem } from "@components/TodoItem.jsx";
import { TodoSearch } from "@components/TodoSearch.jsx";
import { CreateTodoButton } from "@components/CreateTodoButton";

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: true },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
];
const App = () => {
  const [search, setSearch] = React.useState("");
  //const [totalTodos, setTotalTodos] = React.useState("");
  //const [todoCompleted, setTodoCompleted] = React.useState("");
  const todoCompleted = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  return (
    <React.Fragment>
      <TodoCounter totalTodos={totalTodos} todoCompleted={todoCompleted} />
      <TodoSearch search={search} setSearch={setSearch} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
};

export default App;
