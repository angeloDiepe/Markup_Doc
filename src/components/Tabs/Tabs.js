import React from "react";
import "./Tabs.css";
const Tabs=(props)=>{
    return(
        <div id="tab-wrapper">
            <ul id="tab-items">
                <li onClick={() => props.setTab('web')} className={(props.tab==="web")? "isTab":null}>Web Markup</li>
                <li onClick={() => props.setTab('consulting')} className={(props.tab === "consulting") ? "isTab" : null}>Markup Consulting</li>
                <li onClick={() => props.setTab('design')} className={(props.tab === "design") ? "isTab" : null}>Markup Design</li>
            </ul>
        </div>
        )   
}

export default Tabs;