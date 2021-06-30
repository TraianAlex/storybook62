import React from 'react';
import { CarouselCustom } from './CarouselCustom';

export default {
  title: 'Components/Carousel',
  component: CarouselCustom,
};

const Template = (args) => <CarouselCustom {...args} />;

export const Custom = Template.bind({});
