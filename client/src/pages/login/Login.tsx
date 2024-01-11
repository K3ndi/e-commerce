import image1 from "./pic1.jpg";
import "../../styles/login/login.scss";
import { useState } from "react";
// import { Link } from "react-router-dom";


function Login() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return( 
    <div className="login">
      <div className="imagelogin">
        <img src={image1} alt="" />
      </div>
      <div className="right-column">
        <div className="login-form">
          <h2>Log in to Exclucive</h2>
          <p>Enter your details below</p>
        <div className="form">
          <div className="input-box">
            <input type="email" placeholder="Email" value={email}/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" value={password}/>
          </div>
          <div className="input-box">
            <button type="submit" >Log In</button> 
          </div>          
        </div>
      </div>    
      </div>
    </div>

  )
}

export default Login;
