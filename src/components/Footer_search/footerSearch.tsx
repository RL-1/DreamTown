import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './FooterSearch.css'

const FooterSearch: React.FC = () => {

    const [condition,setCondition] = useState(false)
    let colorElement = React.createRef<HTMLInputElement>();
    const [color,setColor] = useState('#fff')
    
        let text = colorElement.current?.value

    const handleClick = ()=> setCondition(!condition)
    let colorWarning = 'pink'
    let colorDefault =  '#fff'
    return (
        <div className='footer_search'>
            <div className="footer_search_block">
                <div className="footer_search_blockItem">
                    <h4 className="footer_title">
                        Хотите подписаться на рассылку?
                    </h4>
                    <div className='footer_search_input_block'>
                        <input ref = {colorElement}  style = {{backgroundColor: condition ? colorWarning : colorDefault}} placeholder={condition ? 'Warning' : 'Введите Ваш e-mail'} className="footer_search_gmail" onFocus = {
                            () => setCondition(false)
                        }/>
                        <button className="footer_search_button" onClick = {
                            () => colorElement.current?.value.length ?  '' : setCondition(true)
                        }>
                            <Link to='/'>
                                Подписаться
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { FooterSearch }