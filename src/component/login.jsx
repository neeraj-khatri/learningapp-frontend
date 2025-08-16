import React from 'react';
import './login.css';


const Login = () => {

function formSubmit(e){
  e.preventDefault();
  // Add login logic here
}

  return (
    <div className="login-container">
      <h1 className="login-title">Login</h1>
      <form className="login-form">
        <input className="login-input" type="text" placeholder="Username" name="username" />
        <input className="login-input" type="password" placeholder="Password" name="password" />
        <button className="login-button" onClick={formSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Login;