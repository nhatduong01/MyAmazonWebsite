import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { auth } from "./firebase.js";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
    // some fancy firebase login
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created user with Email and password
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
    // soem fancy firebase register
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_image"
          src="http://pngimg.com/uploads/amazon/amazon_PNG1.png"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login_signinbutton" onClick={signIn} type="submit">
            {" "}
            Sign In
          </button>
        </form>
        <p className="login_note">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <div className="login_needhelp">
          <ArrowRightIcon />
          <Link to="/">
            <p>Need help?</p>
          </Link>
        </div>
      </div>
      <div className="login_register">
        <div class="separator">New to Amazon?</div>
        <button className="login_registerbutton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
