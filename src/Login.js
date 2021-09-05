import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
function Login() {
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
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className="login_signinbutton"> Sign In</button>
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
        <button className="login_registerbutton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
