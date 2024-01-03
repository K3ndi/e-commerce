import image1 from "./pic1.jpg";
import "../../styles/signup/signup.scss";
import { useState } from "react";
import Login from "../login/Login";
import { Link } from "react-router-dom";


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return( 
    <div className="sign-up">
      <div className="imagesignup">
        <img src={image1} alt="" />
      </div>
      <div className="right-column">
        <div className="signup-form">
          <h2>Create an account</h2>
          <p>Enter your details below </p>
        <div className="form">
          <div className="input-box" >
            <input type="text" placeholder="Name"  value={name} />
          </div>
          <div className="input-box">
            <input type="email" placeholder="Email" value={email}/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" value={password}/>
          </div>
          <div className="input-box">
            <button type="submit" >Create Account</button> 
          </div>          
        </div>
        <p>Already have account? 
          <Link to="/login" > Login</Link>
        </p>

      </div>    
      </div>
    </div>

  )
}

export default Signup;
