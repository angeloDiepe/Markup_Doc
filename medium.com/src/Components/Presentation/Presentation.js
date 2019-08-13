import React from 'react';
import Aux from "../Aux/Aux.js";
import "./Presentation.css";

const Presentation=(props)=>{

	return(
	<div id="presentation">
		<div className="cover-heading"></div>
		{props.handleCommander(props)}
	</div>)
}
	export default Presentation;
	/*<button id="commander1"  className="commander" onClick={()=>props.handleModal(true)}>Commander</button>
		<button id="commander2" className="commander" onClick={()=>props.handleModal(true)}>Commander</button>
		<button id="commander3" className="commander" onClick={()=>props.handleModal(true)}>Commander</button>
		<button id="commander4" className="commander" onClick={()=>props.handleModal(true)}>Commander</button>*/
		