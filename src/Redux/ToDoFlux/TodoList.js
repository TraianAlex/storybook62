import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";

export const TodoList = ({ todos, deleteTodo }) => {
  const todoItems = todos.reverse().map((todo, i) => (
    <li key={i}>
      {todo.title}
      <DeleteTodo onClick={() => deleteTodo(todo.title)}>
        <FontAwesomeIcon icon={faRecycle} color="#17a2b8" />
      </DeleteTodo>
    </li>
  ));

  return <ul>{todoItems}</ul>;
};

const DeleteTodo = styled.span`
  margin-left: 2em;
  cursor: pointer;
`;
