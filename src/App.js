import React,{Component} from 'react';
import {connect} from "react-redux";
import Welcome from "./components/Welcome/Welcome.js";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
import Page from "./components/Page/Page.js";
import Nav from "./components/Nav/Nav.js"; 
import About from "./components/About/About.js"; 
import SearchBar from "./components/SearchBar/SearchBar.js";
import Tabs from "./components/Tabs/Tabs.js";  
import Add from "./components/Add/Add.js";  
import CardList from "./components/CardList/CardList.js"; 
import Footer from "./components/Footer/Footer.js"; 
import AdminRoute from "./components/AdminRoute/AdminRoute.js"; 
import AdminManage from "./containers/AdminManage/AdminManage.js"; 
import Aux from "./containers/hoc/Aux.js";
import './App.css';
import {handleLoggingButton,handleSignupLoginButton,setLoggedIn,setSearchField,setNav,setTab,setRole,handleAdding,onAddingContent,setAdminRoute,loadUser} from "./actions.js"

import Particles from 'react-particles-js';
const particlesOptions = {
	particles: {
		number: {
			value: 85,
			density: {
				enable: true,
				value_area:2000
			}
		}
	}
}
		
const mapStateToProps=state=>({
	loggingButton:state.handleLogging.loggingButton,
	isRegistering:state.handleLogging.isRegistering,
	isLoggedIn:state.handleLogging.isLoggedIn,
	searchField:state.handleSearch.searchField,
	navigation:state.handleLogging.navigation,
	tab:state.handleLogging.tab,
	role:state.handleLogging.role,
	isAdding:state.handleLogging.isAdding,
	isAddingContent:state.handleLogging.isAddingContent,
	routeAdmin:state.handleLogging.routeAdmin,
	loadedUser:state.handleLogging.loadedUser,
})
const mapDispatchToProps=dispatch=>({
	handleLoggingButton: (bool)=>dispatch(handleLoggingButton(bool)),
	handleSignupLoginButton: (bool) => dispatch(handleSignupLoginButton(bool)),
	setLoggedIn: (bool) => dispatch(setLoggedIn(bool)),
	setSearchField: (text) => dispatch(setSearchField(text)),
	setNav: (text) => dispatch(setNav(text)),
	setTab: (text) => dispatch(setTab(text)),
	setRole:(text)=>dispatch(setRole(text)),
	handleAdding:()=>dispatch(handleAdding()),
	onAddingContent:(bool)=>dispatch(onAddingContent(bool)),
	setAdminRoute:(text)=>dispatch(setAdminRoute(text)),
	loadUser:(user)=>dispatch(loadUser(user)),
})
class App extends Component{

	componentDidMount(){
		console.log('test')
	}

	render(){
		return (
			<div className="App">
				{(this.props.isLoggedIn==="false")?
					<Aux>
						<Particles className='particles'
						params={particlesOptions}
						/>
						{(this.props.loggingButton==="false")?
						<Welcome handleLoggingButton={this.props.handleLoggingButton}/>
						:
						<Aux>
							{(this.props.isRegistering==="false")?
								<Login handleLoggingButton={this.props.handleLoggingButton} 
								handleSignupLoginButton={this.props.handleSignupLoginButton} 
								setLoggedIn={this.props.setLoggedIn}
								setRole={this.props.setRole} loadUser={this.props.loadUser}/>
							:
								<Register handleLoggingButton={this.props.handleLoggingButton} 
								handleSignupLoginButton={this.props.handleSignupLoginButton} 
								setLoggedIn={this.props.setLoggedIn} loadUser={this.props.loadUser}/>
							}		
						</Aux>	
						}
					</Aux>
				:
				<Aux>
				{(this.props.role==="admin" )?
					<Aux>
					{(this.props.routeAdmin.length===0)?
						<Aux>
							<AdminRoute setAdminRoute={this.props.setAdminRoute}/>
							<Particles className='particles'
							params={particlesOptions}
							/>
						</Aux>
						
						:null}
					{(this.props.routeAdmin==="manage")?
					<AdminManage setLoggedIn={this.props.setLoggedIn}/>
					:null
					}
					</Aux>
				:null
				}
						{((this.props.routeAdmin !== "manage" && this.props.routeAdmin.length !== 0 )|| this.props.role === "normal" || this.props.role === "superuser" )?
					<Page>
						<Nav setLoggedIn={this.props.setLoggedIn} setNav={this.props.setNav} />
						{(this.props.navigation==="about")?
							<Aux>
								<About/>
								<Footer />
							</Aux>
							:
							<Aux>
								<SearchBar setSearchField={this.props.setSearchField} searchField={this.props.searchField}/>
								<Tabs setTab={this.props.setTab} tab={this.props.tab}/>
								{(this.props.role==="superuser" || this.props.role==="admin")?
									<Add handleAdding={this.props.handleAdding} isAdding={this.props.isAdding}/>
									:null
								}
								<CardList />
								<Footer />	
							</Aux>
						}
					</Page>
					:null
				}	
				</Aux>
				}
				{console.log(this.props)}
			</div>
		);
		}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
