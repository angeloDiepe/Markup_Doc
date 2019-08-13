import React from 'react';
import './ModalContent.css';

const ModalContent = (props) =>{
	    const offExit=()=>{
    window.addEventListener('click',(e)=>{if (e.target===document.getElementById('modal')){
       return props.handleModal(false)}
        })
    }
	return(
		<div id="modal-content">
			<header>Choose Your Plan <span id="close" onClick={()=>{props.handleModal(false)}}>&times;</span></header>
			<section>
				<div id="standard" className="plan">
				<div className="header-plan">Standard Plan</div>
				<div className="contain-plan">Contenu</div>
				<button className="buy-now" onClick={()=>{props.handleForm(true)}}>Commander</button>
				</div>
				<div id="premium" className="plan">
				<div className="header-plan">Premium Plan</div>
				<div className="contain-plan">Contenu</div>
				<button className="buy-now" onClick={()=>{props.handleForm(true)}}>Commander</button>
				</div>
				<div id="business" className="plan">
				<div className="header-plan">Business Plan</div>
				<div className="contain-plan">Contenu</div>
				<button onClick={()=>{props.handleForm(true)}}>Commander</button>
				</div>
			</section>
			{offExit()}
		</div>	
	)
} 

export default ModalContent;
