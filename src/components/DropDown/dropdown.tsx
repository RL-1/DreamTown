import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { state } from '../../state';
import { DropdownProps } from '../../types/data';
import './dropdown.css';

const Dropdown:React.FC<DropdownProps> = (props) => {
        const [click,setClick] = useState(false)
    
        const handleClick = () => setClick(!click)
    
        return(
            <> 
                <ul onClick = {handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {props.block.map((items,index)=> {
                    return(
                        <li key = {index}>
                            <Link className = {items.cName} to = {items.path} onClick = {()=> setClick(false)}>
                                {items.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
            </>
        )
    }

export  {Dropdown};