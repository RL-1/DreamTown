import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import '../Slider.css'
import "swiper/swiper-bundle.min.css";


import SwiperCore, {
    Navigation,
    Pagination,
} from 'swiper';
import { state } from '../../../state';
import { SliderLeft } from '../SliderBlock/sliderLeft';
import { SliderRight } from '../SliderBlock/sliderRight';

SwiperCore.use([Navigation, Pagination]);


const SliderItem = state.SliderElement.map(e =>
    <SwiperSlide className='Slider_container' style={{ backgroundColor: e.color }}>
        <SliderLeft title={e.title} more={e.more} />
        <SliderRight img={e.img} />
    </SwiperSlide>
)


export { SliderItem }