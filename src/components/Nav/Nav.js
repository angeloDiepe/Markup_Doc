import React from "react";
import "./Nav.css";
const Nav=(props)=>{
	const navIcon=()=>[0,1,2].map((i)=><span key={`span${i}`} className={(i===0)? `span${i} navOn topNav`:`span${i} navOn`}></span>)
	const displayNav=()=>{
		const navSpan=document.querySelector('#nav-icon-container').children;
		Object.keys(navSpan).map((i)=>{navSpan[i].classList.toggle('navOn');
			document.querySelector("#nav-items").classList.toggle('isBlock');
			if(i==="0"){
			navSpan[i].classList.toggle('span0')	
			}
			return null
	});
	}
    return(
        <div id="nav-wrapper">
            <span id="nav-text-logo">Markup-Doc</span>
           <div onClick={displayNav} id="nav-icon-container">{navIcon()}</div>
            <ul id="nav-items" className="isBlock">
                <li onClick={() => {props.setNav('home');props.setTab('WEB MARKUP')}}>Home</li>
                <li onClick={() => props.setNav('recent')}>Recent</li>
                <li onClick={() => props.setNav('about')}>About-us</li>
                <li onClick={()=>props.setLoggedIn('false')}>Logout</li>
            </ul>
        </div>
        )   
}

export default Nav;