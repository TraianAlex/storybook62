import React from 'react';
import { ImageData } from './data';
import Slider from './Slider.js';

export const CarouselCustom = () => {
  return <Slider slides={ImageData} />;
};
