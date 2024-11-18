import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import "./authpage.css";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin((isLogin) => !isLogin);
  };

  return (
    <div className='auth-container '>
      <div className='auth-page'>
        <h1>
          {" "}
          {isLogin ? "Welcome to Prox Cash" : "Create a Prox Cash account"}{" "}
        </h1>

        {/* <button onClick={toggleAuthMode} className='auth-toggle'>
          {" "}
          Login
        </button>
        <button onClick={toggleAuthMode} className='auth-toggle'>
          {" "}
          Sign Up
        </button> */}

        {isLogin ? <Login /> : <Signup />}
        <p>
          {isLogin ? "Dont have an account" : "Already have an account?"}
          <span onClick={toggleAuthMode} className='auth-toggle'>
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
