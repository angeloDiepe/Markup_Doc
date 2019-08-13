import React from 'react';
import ModalContent from './ModalContent.js';
import './Modal.css';

const Modal = (props) =>{
	return(
		<div id="modal">
		<ModalContent handleModal={props.handleModal} handleForm={props.handleForm}/>
		</div>	
	)
} 

export default Modal;