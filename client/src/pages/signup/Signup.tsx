import image1 from "./pic1.jpg";
import "../../styles/signup/signup.scss";
import { useState } from "react";

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
          {/* <br /> */}
        <div className="form">
          <div className="input-box" >
            <input type="text" placeholder="Name" style={{width: '300px', height:'50px'}} value={name} />
          </div>
         {/* <br /> */} 
          <div className="input-box">
            <input type="email" placeholder="Email" style={{width: '300px', height:'50px'}} value={email}/>
          </div>

          <div className="input-box">
          {/* <br /> */}
            <input type="password" placeholder="Password" style={{width: '300px', height:'50px'}} value={password}/>
          </div>
          <div className="input-box-button">
          {/* <br />  */}
            <button type="submit" style={{width: '300px', height:'50px', color: 'white', borderRadius:"6px", backgroundColor:'rgba(241, 77, 77)'}}>Create Account</button> 
          </div>
        </div>
      </div>    
      </div>
    </div>

  )
}

export default Signup;
