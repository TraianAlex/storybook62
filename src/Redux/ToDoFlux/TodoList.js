import React from 'react';

export const TodoList = ({ todos }) => {
  const todoItems = todos.map((todo, i) => <li key={i}>{todo.title}</li>);

  return <ul>{todoItems}</ul>;
};
