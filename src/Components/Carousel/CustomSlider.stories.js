import React from 'react';
import { CarouselCustom } from './CarouselCustom';

export default {
  title: 'Components/Carousel/Custom',
  component: CarouselCustom,
};

const Template = (args) => <CarouselCustom {...args} />;

export const Custom = Template.bind({});
