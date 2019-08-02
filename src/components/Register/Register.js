import React ,{Component}from "react";
import "./Register.css";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerName:"",
            registerEmail: "",
            registerPassword: "",
            registerConfirmPasswor:"" 
        }

    }
    onNameChange = (event) => {
        this.setState({ registerName: event.target.value });
    }
    onConfirmPasswordChange = (event) => {
        this.setState({ registerConfirmPassword: event.target.value });
    }

    onEmailChange = (event) => {
        this.setState({ registerEmail: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ registerPassword: event.target.value });
    }
    onSubmit = () => {
        console.log(this.state);
        if(this.state.registerPassword===this.state.registerConfirmPassword && this.state.registerName&&this.state.registerEmail&&this.state.registerPassword){
        fetch("http://localhost:3001/register", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name:this.state.registerName,
                email: this.state.registerEmail,
                password: this.state.registerPassword
            })

        })
            .then(response => response.json())
            .then(user => {
                if (user.id){
                    this.props.loadUser(user);
                    alert("Welcome To Markup Doc");
                    this.props.setLoggedIn("true"); 
                }else{
                    alert("something went")
                }
            })
        }else{
            alert("Check equivalence between the passwords or must filled all the blankspaces")
        }
    }
    render(){        
        return (
            <div id="form-signup" className="form-login">
                <header className="header-login">Markup-Doc <span onClick={() => {this.props.handleLoggingButton('false');this.props.handleSignupLoginButton("false")}}>&times;</span></header>
                <section className="section-login">
                    <div id="name-input" >
                        <span>Name:</span>
                        <input onChange={(event)=>this.onNameChange(event)} type="text" placeholder="John Doe" className="input-login"/>
                    </div>
                    <div id="email-input">
                        <span>Email:</span>
                        <input onChange={(event)=>this.onEmailChange(event)} type="email" placeholder="johndoe@gmail.com"  className="input-login" />
                    </div>
                    <div id="password-input">
                        <span>Password:</span>
                        <input onChange={(event)=>this.onPasswordChange(event)} type="password"  className="input-login" />
                    </div>
                    <div id="confirm-password-input">
                        <span>Confirm Password:</span>
                        <input onChange={(event)=>this.onConfirmPasswordChange(event)} type="password"  className="input-login" />
                    </div>
                    <button onClick={()=>this.onSubmit()}>SignUp</button>
                </section>
                <footer className="footer-login">
                        Already a member? <span onClick={() => this.props.handleSignupLoginButton('false')}>Login</span>
                </footer> 
            </div>
        )
    }    
}

export default Register;