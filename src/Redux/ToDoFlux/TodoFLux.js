import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TodoList } from './TodoList';
import { connect } from './Provider';
import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from './store';

const TodoFlux = ({ dispatch, todos, newTodo }) => {
  const onChange = ({ target }) =>
    dispatch({ type: UPDATE_TODO, todo: target.value });

  const addTodo = (e) => {
    e.preventDefault();
    dispatch({ type: CREATE_TODO, todo: newTodo });
  };

  const deleteTodo = (todo) => dispatch({ type: DELETE_TODO, todo });

  return (
    <TodoContainer>
      <h3>Todo List</h3>
      <form onSubmit={addTodo}>
        <p>
          Create Todo: <FontAwesomeIcon icon={'plus'} color="#17a2b8" />{' '}
          <span>{newTodo}</span>
        </p>
        <input value={newTodo} onChange={onChange} />
      </form>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
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
