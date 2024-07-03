import React from "react";
import "./SignUpScreen.css";
import { useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";

const SignUpScreen = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    
      createUserWithEmailAndPassword(auth,
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
    }).catch(error=>alert(error.message))
  };

  return (
    <div className="signupscreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button type="submit" onClick={signIn}>
          Sign in
        </button>
        <h4>
          <span className="signupscreen_grey">New to Netflix?</span>
          <span className="signupscreen_link" onClick={register}>
            Sign up now
          </span>{" "}
        </h4>
      </form>
    </div>
  );
};

export default SignUpScreen;
