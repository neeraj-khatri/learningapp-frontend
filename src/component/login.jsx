import React from 'react';


const Login = () => {


function formSubmit(){

}

  return (
    <div class="newline">
      <form>
        <input type="text" placeholder="username"></input>
        <input type="text" placeholder="password"></input>
        <button onClick="formSubmit">Submit</button>
      </form>
    </div>
  );
}

export default Login;