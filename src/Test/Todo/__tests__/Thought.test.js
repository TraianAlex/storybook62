import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Thought } from '../Thought.js';
import { Todo } from '../Todo';

test('Should have header text Passing Thoughts', () => {
  render(<Todo />);

  const header = screen.getByText('Passing Thoughts');
  expect(header).toHaveTextContent('Passing Thoughts');
});

test('Display the Thought component', () => {
  const thought = { text: 'learn react testing library' };

  render(<Thought thought={thought} removeThought={() => {}} />);
  // screen.debug();
  const button = screen.getByRole('button');
  expect(button).toBeEnabled();
});

test('"Oreos are delicious" should not appear', () => {
  render(<Todo />);

  const emptyThought = screen.queryByText('Oreos are delicious');
  expect(emptyThought).toBeNull();
});

test('Clicking the x button should remove a thought', async () => {
  render(<Todo />);

  const button = screen.getAllByText('×')[0];

  userEvent.click(button);

  const removedThought = screen.queryByText(
    'This is a place for your passing thoughts.',
  );
  expect(removedThought).toBeNull();
});

test('Should show new thought to be present', async () => {
  render(<Todo />);

  const input = screen.getByRole('input');
  const addButton = screen.getByRole('submit');

  userEvent.type(input, 'Oreos are delicious');
  userEvent.click(addButton);

  const thought = await screen.findByText('Oreos are delicious');
  expect(thought).toBeInTheDocument();
});

test('Should show Thought to be removed', async () => {
  render(<Todo />);

  const input = screen.getByRole('input');
  const submit = screen.getByRole('submit');
  userEvent.type(input, 'I have to call my mom.');
  userEvent.click(submit);

  await waitFor(
    () => {
      const thought = screen.queryByText('I have to call my mom.');
      expect(thought).toBeNull();
    },
    { timeout: 16000 },
  );
}, 17000);

// SKIP_PREFLIGHT_CHECK=true yarn test
