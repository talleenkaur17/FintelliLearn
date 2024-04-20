import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./pana.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import "./signup.scss";

function Register() {
  const [email, setemailval] = useState("");
  const [uname, setuname] = useState("");
  const [password, setpassval] = useState("");
  const navigate = useNavigate();
  
  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
  
    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log("User signed up:", user);
        // Optionally, you can navigate to another page upon successful registration
        navigate('/login'); // Redirect to login page
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing up:", errorCode, errorMessage);
      });
  };

  return (
    <div className="column">
      <div className="stack">
        <div className="stack1">
          <img id="img-logos" src={logo} alt="img" />
        </div>
        <div className="column1">
          <div className="top-box">
            <h3>Signup</h3>
            <p className="txt-1">
              Already registered ? <Link to="/login"> Go to Login Page..</Link>
            </p>
          </div>
          <div className="input-form">
            <form onSubmit={handleFormSubmit}>
              <label className="lab-font" htmlFor="emil1">
                User Name
              </label>
              <input
                placeholder=" enter Username..."
                type="name"
                name="uname"
                autoComplete="off"
                onChange={(e) => {
                  setuname(e.target.value);
                }}
                id="emil1"
              />

              <label className="lab-font" htmlFor="emil1">
                Email address
              </label>
              <input
                placeholder=" enter your email...."
                type="email"
                name="email"
                onChange={(e) => {
                  setemailval(e.target.value);
                }}
                id="emil1"
              />
              <label className="lab-font" htmlFor="pwd1">
                Password
              </label>
              <input
                placeholder=" enter your password...."
                type="password"
                name="password"
                onChange={(e) => {
                  setpassval(e.target.value);
                }}
                id="pwd1"
              />
              <button type="submit" id="sub_button" className="button-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
