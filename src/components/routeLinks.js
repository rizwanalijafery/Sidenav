
import React from "react";
import About from "./about";
import Home from "./home";
import {Routes, Route} from "react-router-dom";
import Services from "./Services";
import Contact from "./contact-us";
const RouteLinks = () =>
{
    return (
        <div >
        {/*<nav>*/}

        {/*        <Link to='/' >Home</Link>*/}
        {/*        <Link to='/about' >About us</Link>*/}
        {/*    <Link to= '/services' >Services</Link>*/}
        {/*    <Link to= '/Contact' >Contact Us</Link>*/}
        {/*</nav>*/}
        <Routes>
           <Route path= '/Home' element={<Home />}></Route>
            <Route path= '/about' element={<About />}></Route>
            <Route path= '/services' element={<Services />}></Route>
            <Route path= '/contact' element={<Contact />}></Route>


        </Routes>
        </div>
    )
}
export default RouteLinks;