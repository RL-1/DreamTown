import { Link } from 'react-router-dom'
import { FooterItemProps } from '../../../types/data'
import { Footer } from '../Footer'
import '../Footer.css'

const FooterItem: React.FC<FooterItemProps> = (props) => {
    return (
        <div className="footer_block">
            <li className="footer_text">
                <Link to='/'>
                    {props.text}
                </Link>
            </li>
        </div>
    )
}

export { FooterItem }