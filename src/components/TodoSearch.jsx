import React from "react";
import "@styles/TodoSearch.scss";
function TodoSearch({ search, setSearch }) {
  const onSearchValueChange = (event) => {
    //esta funcion escucha los cambios a input
    setSearch(event.target.value);
  };
  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={search}
      onChange={onSearchValueChange}
    />,
  ];
}

export { TodoSearch };
