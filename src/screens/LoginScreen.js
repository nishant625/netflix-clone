import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="">
      <div className="loginScreen">
        <div className="loginscreen_background">
          <img
            className="loginscreen_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
        </div>
        <button className="loginscreen_button" onClick={() => setSignIn(true)}>
          sign in
        </button>
        <div className="loginscreen_gradient" />
      </div>
      <div className="loginscreen_body">
        {signIn ? (<SignUpScreen/>):(<>
          <h1>Unlimited Films,TV Programmes and more.</h1>
          <h2>watch anywhere ,cancel anytime</h2>
          <h3>
            Ready to watch?Enter your email to create or restart your{" "}
            <membership className=""></membership>
          </h3>
        
        <div className="loginscreen_input">
          <form>
            <input type="email" placeholder="Email Address" />
            <button
              className="loginscreen_getstarted"
              onClick={() => setSignIn(true)}
            >
              GET STARTED
            </button>
          </form>
        </div>
        </>)}
      </div>
    </div>
  );
};

export default LoginScreen;
