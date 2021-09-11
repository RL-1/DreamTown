import './../News/News.css'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper-bundle.min.css";


import SwiperCore, {
    Navigation,
    Pagination,
} from 'swiper';
import { CardItem } from '../Card/CardItem';
import { state } from '../../state';
import { NewsButton } from '../News/NewsButton';

const Stock:React.FC = () => {
    return (
        <div className='news'>
            <div className='news_box'>
                <div className="news_title">
                    Акции
                </div>
                <div className="news_card">
                    <Swiper pagination={true} navigation={true} className="card">
                        <SwiperSlide className='card_swiper'>
                            <CardItem block={state.StockCard.FirstCard} />
                        </SwiperSlide>
                        <SwiperSlide className='card_swiper'>
                            <CardItem block={state.StockCard.MidleCard} />
                        </SwiperSlide>
                        <SwiperSlide className='card_swiper'>
                            <CardItem block={state.StockCard.LastCard} />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <NewsButton/>
            </div>
        </div>
    )
}

export {Stock}