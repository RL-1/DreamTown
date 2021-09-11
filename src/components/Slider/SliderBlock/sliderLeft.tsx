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
                    <div className="left-button">
                        <Link to='/'>
                            {props.more}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export { SliderLeft }