import React from 'react';
import HomeImg from "../../assets/home.png";
import EnterpriseImg from "../../assets/enterprise.png";
import ContactImg from "../../assets/contact.png";
import NewsletterImg from "../../assets/newsletter.png";

const Menu=()=>{
			 const Toggle=(event)=>{
			 	event.currentTarget.classList.toggle('hover-on')
			 }
	return<div id="menu">
      <div id="homeSlide" className="hover-on" onMouseEnter={(event)=>Toggle(event)} onMouseLeave={(event)=>Toggle(event)}><img alt="menu-items" src={HomeImg}/><a href="intro.html">Home</a></div>
      <div id="enterpriseSlide" className="hover-on" onMouseEnter={(event)=>Toggle(event)} onMouseLeave={(event)=>Toggle(event)}><img alt="menu-items" src={EnterpriseImg}/><a  href="intro.html">Notre Entreprise</a></div>
      <div id="contactSlide" className="hover-on" onMouseEnter={(event)=>Toggle(event)} onMouseLeave={(event)=>Toggle(event)}><img alt="menu-items" src={ContactImg}/><a  href="#service">Contacter Nous  </a></div> 
      <div id="newsletterSlide" className="hover-on" onMouseEnter={(event)=>Toggle(event)} onMouseLeave={(event)=>Toggle(event)}><img alt="menu-items" src={NewsletterImg}/> <a  data-toggle="modal" data-target="#ns" href="#newsletter">  Newsletter</a></div>
      </div>
  }

	export default Menu;