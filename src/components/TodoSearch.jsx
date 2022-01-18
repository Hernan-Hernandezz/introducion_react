import React from "react";
import "@styles/TodoSearch.scss";
function TodoSearch() {
  const [search, setSearch] = React.useState();
  const onSearchValueChange = (event) => {
    //esta funcion escucha los cambios a input
    console.log(event.target.value);
    setSearch(event.target.value);
  };
  return [
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={search}
      onChange={onSearchValueChange}
    />,
    <p>{search}</p>,
  ];
}

export { TodoSearch };
