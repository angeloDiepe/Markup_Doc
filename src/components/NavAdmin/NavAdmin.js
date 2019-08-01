import React from "react";
import home from "../../assets/home.png";
import user from "../../assets/user.png";
import message from "../../assets/message.png";
import logout from "../../assets/logout.png";
import "./NavAdmin.css";
const NavAdmin=(props)=>{
    return(
        <ul id="nav-admin">
            <li><img src={home} alt="home"/></li>    
            <li><img src={user} alt="user" /></li>    
            <li><img src={message} alt="message" /></li>    
            <li onClick={()=>props.setLoggedIn("false")}><img src={logout} alt="logout" /></li>    
        </ul>
    )
}

export default NavAdmin;