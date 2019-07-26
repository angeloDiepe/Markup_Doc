import React,{Component} from 'react';
import {connect} from "react-redux";
import Welcome from "./components/Welcome/Welcome.js";
import Login from "./components/Login/Login.js";
import Page from "./components/Page/Page.js";
import Nav from "./components/Nav/Nav.js"; 
import SearchBar from "./components/SearchBar/SearchBar.js"; 
import CardList from "./components/CardList/CardList.js"; 
import Footer from "./components/Footer/Footer.js"; 
import Aux from "./containers/hoc/Aux.js";
import './App.css';
import {handleLoggingButton,handleSignupLoginButton,setLoggedIn,setSearchField} from "./actions.js"

const mapStateToProps=state=>({
	loggingButton:state.handleLogging.loggingButton,
	isRegistering:state.handleLogging.isRegistering,
	isLoggedIn:state.handleLogging.isLoggedIn,
	searchField:state.handleSearch.searchField
})
const mapDispatchToProps=dispatch=>({
	handleLoggingButton: (bool)=>dispatch(handleLoggingButton(bool)),
	handleSignupLoginButton: (bool) => dispatch(handleSignupLoginButton(bool)),
	setLoggedIn: (bool) => dispatch(setLoggedIn(bool)),
	setSearchField: (text) => dispatch(setSearchField(text)),
})
class App extends Component{
  render(){
	  return (
		<div className="App">
			{(this.props.isLoggedIn==="false")?
				<Aux>
					{(this.props.loggingButton==="false")?
					<Welcome handleLoggingButton={this.props.handleLoggingButton}/>
					: 
					<Login handleLoggingButton={this.props.handleLoggingButton} 
					handleSignupLoginButton={this.props.handleSignupLoginButton} 
					isRegistering={this.props.isRegistering}
					setLoggedIn={this.props.setLoggedIn}/>
					}
				</Aux>
			:
			<Aux>
				<Page>
					<Nav setLoggedIn={this.props.setLoggedIn}/>
					<SearchBar setSearchField={this.props.setSearchField} searchField={this.props.searchField}/>
					<Footer/>
					<CardList/>
				</Page>	
			</Aux>
			}
		</div>
	  );
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
