import React,{Component} from 'react';
import {connect} from "react-redux";
import Welcome from "./components/Welcome/Welcome.js";
import './App.css';
import {handleLoggingButton} from "./actions.js"

const mapStateToProps=state=>({
	loggingButton:state.loggingButton
})
const mapDispatchToProps=dispatch=>({
	handleLoggingButton: (bool)=>dispatch(handleLoggingButton(bool))
})
class App extends Component{
  render(){
	  return (
	    <div className="App">
			  <Welcome loggingButton={this.props.loggingButton} handleLoggingButton={this.props.handleLoggingButton}/>
			  </div>
	  );
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
