import "../Card/Card.css"
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/swiper-bundle.min.css";


import SwiperCore, {
    Navigation,
    Pagination,
} from 'swiper';
import { NewsItemProps } from "../../types/data";
import { Card } from "./Card";


const CardItem: React.FC<NewsItemProps> = (props) => {
    return (
            <SwiperSlide className='card_swiper'>
                {props.block.map(e =>
                    <Card img={e.img} title={e.title} date={e.date} />
                )}
                <div className = 'padding'/>
            </SwiperSlide>
    )
}

export { CardItem }