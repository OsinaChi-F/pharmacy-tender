import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
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