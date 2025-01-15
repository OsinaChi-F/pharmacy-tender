import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    // If login is successful, navigate to the dashboard
    if (email === 'email' && password === 'password') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };



  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="input">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit">Login</button>
           <p>
          Don't have an account?{" "}
          <span
            className="link"
            onClick={() => navigate("/signup")} // Replace "/signup" with your actual signup route
          >
            Sign up here.
          </span>
         </p>
        </form>
        
      </div>
    </div>
  );
};

export default Login;