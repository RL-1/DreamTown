import { Link } from 'react-router-dom';
import { state } from '../../state';
import './Footer.css';
import { FooterAdressItem } from './FooterCreateItem/FooterAdressItem';
import { FooterItem } from './FooterCreateItem/FooterItem';
import facebook from './Svg/facebook.svg'
import instagram from './Svg/instagram.svg'

const Footer: React.FC = () => {
    return (
        <div className='footer'>
            <div className="footer_box">
                <div className="footer_grid_column">
                    {state.FooterItem.map(e =>
                        <FooterItem text={e.text} />
                    )}
                    <div className="footer_contantc">
                        <h4 className='footer_title_contanct'>
                            Контакты
                        </h4>
                        <div>
                            {state.FooterAdressItem.map(e =>
                                <FooterAdressItem text={e.text} />
                            )}
                            <p className='footer_map'>
                                <Link to=''>
                                    Смотреть на карту
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="footer_social">
                    <a href="https://www.instagram.com/?hl=uk">
                        <img src={instagram} alt="" />
                    </a>
                    <a href="https://uk-ua.facebook.com/">
                        <img src={facebook} alt="" />
                    </a>
                </div>
                <div className="footer_end_block">
                    <div className="footer_author">
                        Рамен Любенко 11В
                    </div>
                    <a href = 'https://dreamtown.ua/ua/' className="footer_official_site">
                        dreamtown.ua/ru
                    </a>
                </div>
            </div>
        </div>
    )
}
export { Footer }