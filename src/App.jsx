import React from "react";
import { TodoCounter } from "@components/TodoCounter.jsx";
import { TodoList } from "@components/TodoList.jsx";
import { TodoItem } from "@components/TodoItem.jsx";
import { TodoSearch } from "@components/TodoSearch.jsx";
import { CreateTodoButton } from "@components/CreateTodoButton";

const todos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el cursso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
];
const App = () => {
  const [search, setSearch] = useState("");
  const [totalTodos, setTotalTodos] = useState("");

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
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
