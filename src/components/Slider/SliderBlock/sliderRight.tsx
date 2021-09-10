import { SliderRightProps } from '../../../types/data'
import img1 from './../../../Svg/img1.jpg'
import './../Slider.css'

const SliderRight:React.FC<SliderRightProps> = (props) => {
    return(
        <div className = 'right_container'>
        <img src = {props.img} />
        </div>
    )
}

export {SliderRight}