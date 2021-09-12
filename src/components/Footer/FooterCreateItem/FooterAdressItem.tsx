import { FooterAdressItemProps } from '../../../types/data';
import '../Footer.css';

const FooterAdressItem:React.FC<FooterAdressItemProps> = (props) => {
    return(
        <p>
            {props.text}
        </p>
    )
}
export {FooterAdressItem}