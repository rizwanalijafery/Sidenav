import React from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars,faXmark} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import {SidebarData} from "./SidebarData";
import './Navbar.css'

function Navbar()
{
    const [sidebar,setSidebar] = useState(false);
    const showSidebar = ()=>
    {
       return setSidebar(!sidebar);
    }

    return (
        <>
        <div className={'navbar'}>
            <Link to= {'#'} className={'menu.bars'}>
                <FontAwesomeIcon  icon={faBars} onClick={showSidebar}/>
            </Link>
        </div>
            <nav className={sidebar ? 'nav-menu active':'nav-menu'}>
                <ul className={'nav-menu-items'}>
                    <li className={'navbar-toggle'}>
                        <Link to={'#'} className={'menu-bars'}>
                            <FontAwesomeIcon icon={faXmark} />
                        </Link>

                    </li>
                    {SidebarData.map((item,index)=>{
                        return (
                            <li key={index} className={item.cName}>
                              <Link to={item.path}></Link>
                                {item.icon}
                                <span>{item.title}</span>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}
export default Navbar;