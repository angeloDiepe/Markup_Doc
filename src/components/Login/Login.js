import React,{Component} from "react";
import "./Login.css";

class  Login extends Component {
    constructor(props){
        super(props);
        this.state={
            loginEmail:"",
            loginPassword:""
        }

    }
    onEmailChange=(event)=>{
        this.setState({loginEmail:event.target.value});
    }

    onPasswordChange=(event)=> {
        this.setState({ loginPassword: event.target.value });
    }
    onSubmit=()=>{
        console.log(this.state);
        fetch("http://localhost:3001/signin",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                email:this.state.loginEmail,
                password:this.state.loginPassword
            })
            
        })
        .then(response=>response.json())
        .then(user=>{
            console.log(user)
          const checkRole =(user)=>{
               if (user.role==="normal") {
                alert("Valid Credentials");
                this.props.setRole("normal");
                this.props.loadUser(user);
                return true;
            } else if (user.role==="superuser") {
                alert('superuser');
                this.props.setRole("superuser");
                this.props.loadUser(user);
                return true;
            } else if (user.role==="admin") {
                alert('admin!');
                this.props.setRole("admin");
                this.props.loadUser(user);
                return true;
            } else {
                alert('Wrong Credentials!');
                return false;
            }
        }
        this.props.setLoggedIn(checkRole(user).toString())
    })
    .catch(err=>alert("Please fill the blankspaces OR wrong credentials"))
    }
    render(){
        return (
                <div id="form-login" className="form-login">
                    <header className="header-login">Markup-Doc <span onClick={() => {this.props.handleLoggingButton('false');this.props.handleSignupLoginButton("false")}}>&times;</span></header>
                    <section className="section-login">
                        <div id="email-input">
                            <span>Email:</span>
                        <input type="email" placeholder="johndoe@gmail.com" className="input-login" onChange={(event) => this.onEmailChange(event)} />
                        </div>
                        <div id="password-input">
                            <span>Password:</span>
                            <input type="password" className="input-login" onChange={(event)=>this.onPasswordChange(event)}/>
                        </div>
                            <button onClick={()=>this.onSubmit()}>Login</button>
                    </section>
                    <footer className="footer-login">
                                Not yet a member? <span onClick={() => this.props.handleSignupLoginButton('true')}>SignUp</span>
                    </footer>
                </div>
        )
    }   
}
export default Login;