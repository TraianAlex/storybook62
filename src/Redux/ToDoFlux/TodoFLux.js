import React from "react";
import styled from "styled-components";
import { TodoList } from "./TodoList";
import { connect } from "./Provider";
import { CREATE_TODO, UPDATE_TODO } from "./store";

const TodoFlux = (props) => {
  const onChange = ({ target }) => {
    props.dispatch({ type: UPDATE_TODO, todo: target.value });
  };

  const addTodo = (e) => {
    e.preventDefault();
    props.dispatch({ type: CREATE_TODO, todo: props.newTodo });
  };

  const { todos, newTodo } = props;

  return (
    <TodoContainer>
      <h3>Todo List</h3>
      <form onSubmit={addTodo}>
        <p>
          Create todo: <span>{newTodo}</span>
        </p>
        <input value={newTodo} onChange={onChange} />
      </form>
      <TodoList todos={todos} />
    </TodoContainer>
  );
};

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin: 1em 0;
  }
  ul {
    margin: 2em 0;
  }
  li {
    padding: 1em;
    list-style: none;
    border-bottom: 2px solid #d3d3d3;
    &:last-child {
      border: none;
    }
  }
`;

export default connect((state) => state)(TodoFlux);
