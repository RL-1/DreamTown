import './News.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper-bundle.min.css";


import SwiperCore, {
    Navigation,
    Pagination,
} from 'swiper';
import { Card } from '../Card/Card';
import { state } from '../../state';

const News:React.FC = () => {
    return(
        <div className = 'news'>
            <div className = 'news_box'>
                <div className="news_title">
                    Новости
                </div>
                <div className="news_card">
                <Swiper pagination={true} navigation={true} className="card">
                <SwiperSlide className='card_swiper'>
                    {state.NewsCard.FirstCard.map(e=>
                        <Card img = {e.img} title = {e.title} date = {e.date}/>    
                    )}
                </SwiperSlide>
                <SwiperSlide className='card_swiper'>
                    {state.NewsCard.MidleCard.map(e=>
                        <Card img = {e.img} title = {e.title} date = {e.date}/>    
                    )}
                </SwiperSlide>
                <SwiperSlide className='card_swiper'>
                    {state.NewsCard.LastCard.map(e=>
                        <Card img = {e.img} title = {e.title} date = {e.date}/>    
                    )}
                </SwiperSlide>
                </Swiper>
                </div>
            </div>
        </div>
    )
}

export {News}