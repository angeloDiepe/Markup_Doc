import React from "react";
import Aux from "../../containers/hoc/Aux.js"
import "./Login.css";
const Login =(props)=> {
    const checkEntry=(email,pwd)=>{
        if(email==="angelodiepe10@yahoo.com" && pwd==="Angelo2001"){
            alert("Valid Credentials");
            return true;
        }else{
            alert('Wrong Credentials');
            return false;
        }
    }
    return (
        <Aux>
            {(props.isRegistering==="false")?
            <div id="form-login" className="form-login">
                <header className="header-login">Markup-Doc <span onClick={() => {props.handleLoggingButton('false');props.handleSignupLoginButton("false")}}>&times;</span></header>
                <section className="section-login">
                    <div id="email-input">
                        <span>Email:</span>
                        <input type="email" placeholder="johndoe@gmail.com" className="input-login" />
                    </div>
                    <div id="password-input">
                        <span>Password:</span>
                        <input type="password" className="input-login" />
                    </div>
                        <button onClick={() =>props.setLoggedIn(checkEntry(document.querySelector("#email-input").lastChild.value, document.querySelector("#password-input").lastChild.value).toString())}>Login</button>
                </section>
                <footer className="footer-login">
                            Not yet a member? <span onClick={() => props.handleSignupLoginButton('true')}>SignUp</span>
                </footer>
            </div>:
            <div id="form-signup" className="form-login">
                <header className="header-login">Markup-Doc <span onClick={() => {props.handleLoggingButton('false');props.handleSignupLoginButton("false")}}>&times;</span></header>
                <section className="section-login">
                    <div id="name-input" >
                        <span>Name:</span>
                        <input type="text" placeholder="John Doe" className="input-login"/>
                    </div>
                    <div id="email-input">
                        <span>Email:</span>
                        <input type="email" placeholder="johndoe@gmail.com"  className="input-login" />
                    </div>
                    <div id="password-input">
                        <span>Password:</span>
                        <input type="password"  className="input-login" />
                    </div>
                    <div id="confirm-password-input">
                        <span>Confirm Password:</span>
                        <input type="password"  className="input-login" />
                    </div>
                    <button>SignUp</button>
                </section>
                <footer className="footer-login">
                        Already a member? <span onClick={() => props.handleSignupLoginButton('false')}>Login</span>
                </footer> 
            </div>}
        </Aux>
    )
}

export default Login;