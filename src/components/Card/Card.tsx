import "./Card.css"
import img1 from '../../Svg/img1.jpg'
import { CardProps } from "../../types/data"
import { Link } from "react-router-dom"


const Card: React.FC<CardProps> = (props) => {
    return (
        <div className='card_box'>
            <div className='card_img_block'>
                <img src={props.img} alt="" className="card_img" />
                <div className="card_date">
                    {props.date}
                </div>
                <div className="card_text_block">
                    <div className="card_line" />
                    <h5 className="card_title">
                        {props.title}
                    </h5>
                    <Link to='/'>
                        <div className="card_button">
                            Подробнее
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export { Card }