import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import './Slider.css'
import "swiper/swiper-bundle.min.css";
import img1 from './../../Svg/img1.jpg';
import img2 from './../../Svg/img2.jpg';
import img3 from './../../Svg/img3.jpg'

import SwiperCore, {
  Navigation,
  Pagination,
} from 'swiper';
import { SliderLeft } from './SliderBlock/sliderLeft';
import { SliderRight } from './SliderBlock/sliderRight';
import { state } from '../../state';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


const Slider: React.FC = () => {

  return (
    <Swiper pagination={true} navigation={true} className="slider">
      <SwiperSlide className='Slider_container' style = {{backgroundColor:'#ffcd00'}}>
        <SliderLeft title={'СКИДОЧНЫЙ СЕЗОН'} more={'Узнать больше'} />
        <SliderRight img={img1} />
      </SwiperSlide>
      <SwiperSlide className='Slider_container' style = {{backgroundColor:'#7d55c8'}}>
        <SliderLeft title={'ВЫХОДНЫЕ\nСЕНТЯБРЯ'} more={'Узнать больше'} />
        <SliderRight img={img2} />
      </SwiperSlide>
      <SwiperSlide className='Slider_container' style = {{backgroundColor:'#7d55c8'}}>
        <SliderLeft title={'МАСТЕР-КЛАССЫ\nСЕНТЯБРЯ'} more={'Узнать больше'} />
        <SliderRight img={img3} />
      </SwiperSlide>
    </Swiper>
  );
}

export { Slider }