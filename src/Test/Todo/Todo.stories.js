import React from 'react';
import { Todo } from './Todo';

export default {
  title: 'Diverse/Test',
  component: Todo,
};

const Template = (args) => <Todo {...args} />;

export const Todos = Template.bind({});
