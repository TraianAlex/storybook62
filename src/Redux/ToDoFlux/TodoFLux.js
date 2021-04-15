import React from 'react';
import { TodoList } from './TodoList';
import { connect } from './Provider';
import { CREATE_TODO, UPDATE_TODO } from './store';

const TodoFlux = props => {
  const onChange = ({ target }) => {
    props.dispatch({ type: UPDATE_TODO, todo: target.value });
  };

  const addTodo = e => {
    e.preventDefault();
    props.dispatch({ type: CREATE_TODO, todo: props.newTodo });
  };

  const { todos, newTodo } = props;

  return (
    <div>
      <h2>To do List</h2>
      <form onSubmit={addTodo}>
        <input value={newTodo} onChange={onChange} />
        <label>
          Create todo: <span>{newTodo}</span>
        </label>
      </form>
      <TodoList todos={todos} />
    </div>
  );
};

export default connect(state => state)(TodoFlux);
