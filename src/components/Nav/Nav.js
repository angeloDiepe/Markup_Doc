import React from "react";
import "./Nav.css";
const Nav=(props)=>{
    return(
        <div id="nav-wrapper">
            <span id="nav-text-logo">Markup-Doc</span>
            <ul id="nav-items">
                <li>Home</li>
                <li>Recent</li>
                <li>About-us</li>
                <li onClick={()=>props.setLoggedIn('false')}>Logout</li>
            </ul>
        </div>
        )   
}

export default Nav;