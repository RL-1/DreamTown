import { Link } from 'react-router-dom'
import './News.css'

const NewsButton: React.FC = () => {
    return (
        <Link to='/'>
            <div className='news_button'>
                Узнать больше
            </div>
        </Link>
    )
}

export { NewsButton }