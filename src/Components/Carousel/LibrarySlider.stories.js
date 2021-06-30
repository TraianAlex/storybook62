import React from 'react';
import { CarouselLibrary } from './CarouselLibrary';

export default {
  title: 'Components/Carousel',
  component: CarouselLibrary,
};

const Template = (args) => <CarouselLibrary {...args} />;

export const Library = Template.bind({});
