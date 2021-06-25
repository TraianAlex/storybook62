import React from "react";
import styled from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faMinus,
  faMinusCircle,
  faMinusSquare
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faPlus,
  faPlusCircle,
  faPlusSquare,
  faMinus,
  faMinusCircle,
  faMinusSquare
);

export const TodoList = ({ todos, deleteTodo }) => {
  const todoItems = todos.reverse().map((todo, i) => (
    <li key={i}>
      {todo.title}
      <DeleteTodo onClick={() => deleteTodo(todo.title)}><i className="fa fa-plus"></i></DeleteTodo>
    </li>
  ));

  return <ul>{todoItems}</ul>;
};

const DeleteTodo = styled.span`
  margin-left: 2em;
  cursor: pointer;
`;
