import React from "react";
// import Home from "./home";
// import About from "./about";
// import Services from "./Services";
// import Contact from "./contact-us";
import {Link} from "react-router-dom";
// import Logo from "../image.JPG";
// import Navbar from "./Navbar";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSquareInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import './Navbar.css';
import '../App.css';


const CenterHeader = () =>
{
    return (
        <div className={'container'}>
            <div className={"all"}>
                <div className={'bootstrap-logo'}>
                <h3>Start Bootstrap</h3>

                    <Link to= {'#'} className={'menu-bars'}>
                        <FontAwesomeIcon  icon={faBars} />
                    </Link>
                </div>
                <nav>

                    <Link to='/' >Home</Link>
                    <Link to='/about' >About us</Link>
                    <Link to= '/services' >Services</Link>
                    <Link to= '/Contact' >Contact Us</Link>
                </nav>
                <div>
                <Link to={'https://www.google.com/'} target={"_blank"}><FontAwesomeIcon icon={faSquareInstagram} /></Link>
                    <Link to={'https://www.google.com/'} target={"_blank"}><FontAwesomeIcon icon={faSquareTwitter} /></Link>
                </div>
            </div>
        </div>



)
}
export default CenterHeader;