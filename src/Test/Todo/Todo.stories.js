import React from 'react';
import { Todo } from './Todo';

export default {
  title: 'Test',
  component: Todo,
};

const Template = (args) => <Todo {...args} />;

export const Todos = Template.bind({});
