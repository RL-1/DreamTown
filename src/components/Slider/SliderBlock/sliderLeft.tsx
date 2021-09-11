import { Link, NavLink } from 'react-router-dom'
import { SliderLeftProps } from '../../../types/data'
import './../Slider.css'

const SliderLeft: React.FC<SliderLeftProps> = (props) => {
    return (
        <>
            <div className='left_container'>
                <div className='left_box'>
                    <div className='left_title'>
                            {props.title}
                        <div className='left_line' />
                    </div>
                    <div className="left_button">
                        <Link to='/' className = 'left_button_text'>
                            {props.more}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export { SliderLeft }