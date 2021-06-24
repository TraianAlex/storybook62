import React from "react";

export const TodoList = ({ todos }) => {
  const todoItems = todos
    .reverse()
    .map((todo, i) => <li key={i}>{todo.title}</li>);

  return <ul>{todoItems}</ul>;
};
