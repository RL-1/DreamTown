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
import { CardItem } from '../Card/CardItem';
import { NewsButton } from './NewsButton';

const News: React.FC = () => {
    return (
        <div className='news'>
            <div className='news_box'>
                <div className="news_title">
                    Новости
                </div>
                <div className="news_card">
                    <Swiper pagination={true} navigation={true} className="card">
                        <SwiperSlide className='card_swiper'>
                            <CardItem block={state.NewsCard.FirstCard} />
                        </SwiperSlide>
                        <SwiperSlide className='card_swiper'>
                            <CardItem block={state.NewsCard.MidleCard} />
                        </SwiperSlide>
                        <SwiperSlide className='card_swiper'>
                            <CardItem block={state.NewsCard.LastCard} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <NewsButton/>
            </div>
        </div>
    )
}

export { News }