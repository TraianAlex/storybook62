import React, { useState } from 'react';
import styled from 'styled-components';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

export const Todo = () => {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  const addThought = (thought) =>
    setThoughts((thoughts) => [thought, ...thoughts]);

  const removeThought = (thoughtIdToRemove) =>
    setThoughts((thoughts) =>
      thoughts.filter((thought) => thought.id !== thoughtIdToRemove),
    );

  return (
    <TodoTest>
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought
              removeThought={removeThought}
              key={thought.id}
              thought={thought}
            />
          ))}
        </ul>
      </main>
    </TodoTest>
  );
};

const TodoTest = styled.div`
  margin: 0;
  font-size: 16pt;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  margin: 0 auto;
  max-width: 600px;
  width: 95%;

  h1:before {
    content: '💭';
    margin-right: 0.5em;
  }

  input,
  button {
    font: inherit;
    box-sizing: border-box;
  }

  input[type='submit'],
  button {
    cursor: pointer;
  }

  .AddThoughtForm {
    display: flex;
    flex-wrap: wrap;
  }

  .AddThoughtForm input {
    padding: 1.5rem;
    border: 1px solid #666;
    border-radius: 3px;
  }

  .AddThoughtForm input[type='text'] {
    flex-grow: 1;
    margin-right: 0.5rem;
  }

  .thoughts {
    list-style-type: none;
    padding: 0;
  }

  .Thought {
    padding: 1rem;
    margin-bottom: 1rem;
    border-radius: 3px;
    background-color: #eee;
  }

  .Thought .remove-button {
    font-size: 80%;
    float: right;
    border: 0;
    border-radius: 3px;
    background: transparent;
  }

  .Thought .remove-button:hover {
    color: #fff;
    background-color: #000;
  }
`;
