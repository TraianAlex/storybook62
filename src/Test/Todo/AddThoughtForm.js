/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export const AddThoughtForm = ({ addThought }) => {
  const [text, setText] = useState('');

  const handleTextChange = ({ target }) => setText(target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length) {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };
      addThought(thought);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        type="text"
        role="input"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" role="submit" value="Add" />
    </form>
  );
};
