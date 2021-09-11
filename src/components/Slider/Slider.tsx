import React from 'react';
import { Swiper } from 'swiper/react'
import './Slider.css'
import "swiper/swiper-bundle.min.css";
import { SliderItem } from './SliderCreateItem/SliderItem';

// install Swiper modules


const Slider: React.FC = () => {
  return (
    <Swiper pagination={true} navigation={true} className="slider">
      {SliderItem}
    </Swiper>
  );
}

export { Slider }