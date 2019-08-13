import React from "react";
import "./Tabs.css";
const Tabs=(props)=>{
    return(
        <div id="tab-wrapper">
            <ul id="tab-items">
                <li onClick={() => props.setTab('WEB MARKUP')} className={(props.tab==="WEB MARKUP")? "isTab":null}>Web Markup</li>
                <li onClick={() => props.setTab('MARKUP CONSULTING')} className={(props.tab === "MARKUP CONSULTING") ? "isTab" : null}>Markup Consulting</li>
                <li onClick={() => props.setTab('MARKUP DESIGN')} className={(props.tab === "MARKUP DESIGN") ? "isTab" : null}>Markup Design</li>
            </ul>
        </div>
        )   
}

export default Tabs;