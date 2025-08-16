import React from 'react';
import './signup.css';


const Signup = () => {
const [name, setName] = React.useState("");
const [email, setEmail] = React.useState("");
const [username, setUsername] = React.useState("");
const [password, setPassword] = React.useState("");


function handleName(e){
   setName(e.target.value);
}

function handleUsername(e){
   setUsername(e.target.value);
}

function handlePassword(e){
   setPassword(e.target.value);
}


function handleEmail(e){
   setEmail(e.target.value);
}

  async function formSubmit(e) {
    e.preventDefault(); // Prevent form refresh

    const payload = {
      name,
      email,
      username,
      password,
    };

    try {
      const response = await fetch('https://learningapp-backend-lvhz.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Signup successful!');
        // Optionally clear form
        
      } else {
        alert(`Signup failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred. Please try again.');
    }
  }

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up Teacher</h1>
      <form className="signup-form">
        <input className="signup-input" type="text" onChange={handleName} placeholder="Name" name="name" />
        <input className="signup-input" type="email" onChange={handleEmail} placeholder="Email" name="email" />
        <input className="signup-input" type="text" onChange={handleUsername} placeholder="Username" name="username" />
        <input className="signup-input" type="password" onChange={handlePassword} placeholder="Password" name="password" />
        <button className="signup-button" onClick={formSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Signup;