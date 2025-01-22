import React, { useState } from "react"; 
import "./LoginSignup.css";
import "./index.css";
import user_icon from "./user.png";
import email_icon from "./email.png";
import password_icon from "./padlock.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmpassword) {
      alert("Passwords do not match!");
      return; // Stop form submission if passwords don't match
    }

    console.log("User Registered:", formData); // Simulate saving user data
    console.log("Signup successful:", formData);

    // Redirect to Login page upon successful signup
    navigate("/");
  };

  return (
    <div className="header"> 
      <div className="text">SignUp</div>
      <div className="underline"></div>
      <div className="image-container">
        <img src="/src/Components/Assets/luth-logomain-removebg.png" alt="Signup Banner" className="signup-banner" />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="input">
            <img className="username" src={user_icon} alt=""/>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <img className="email" src={email_icon} alt=""/>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <img className="password" src={password_icon} alt=""/>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input">
            <img className="confirmpassword" src={password_icon} alt=""/>
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
