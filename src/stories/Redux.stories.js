import React from 'react';
import TodoFlux from '../Redux/ToDoFlux/TodoFLux';

export default {
  title: 'Redux/ToDoFlux',
  component: TodoFlux,
};

const Template = (args) => <TodoFlux {...args} />;

export const ToDoFlux = Template.bind({});
