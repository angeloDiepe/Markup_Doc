import React,{Component} from 'react';
import Web from "../../assets/web.jpg";
import Marketing from "../../assets/marketing.jpg";
import Design from "../../assets/design.jpg";
import Formation from "../../assets/formation.jpg";
import './Slider.css';

class Slider extends Component{
	componentDidMount(){
	const sliderContent=document.querySelector('.slider-content');
	console.log(sliderContent)
	const sliderContentStyle=window.getComputedStyle(sliderContent);
	const sliding=()=>{
		if (sliderContentStyle.getPropertyValue('transform')==="matrix(1, 0, 0, 1, 0, 0)") {
			this.props.setCommander(1);
		}
		if (sliderContentStyle.getPropertyValue('transform')==="matrix(1, 0, 0, 1, 0, -900)") {
			this.props.setCommander(2);
		}
		if (sliderContentStyle.getPropertyValue('transform')==="matrix(1, 0, 0, 1, 0, -1800)") {
			this.props.setCommander(3);
		}
		if (sliderContentStyle.getPropertyValue('transform')==="matrix(1, 0, 0, 1, 0, -2700)") {
			this.props.setCommander(4);
		}
	}

	setInterval(sliding,1000);
}
	render(){
	return(
	<div id="slider-container">
		<div id="background-dark"></div>
			<div className="slider">
		     	<div className="slider-content">
			     	<img src={Web} alt="web"/>
			        <img src={Marketing} alt="marketing"/>
			        <img src={Design} alt="design"/>
			        <img src={Formation} alt="formation"/>
		      	</div>
	    	</div>
	</div>
	)
  }
}

export default Slider;