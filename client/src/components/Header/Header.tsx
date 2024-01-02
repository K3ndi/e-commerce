import { Link } from "react-router-dom";
import "../../styles/header/header.scss"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Header: React.FC = () => {


  return (
    <div className="header">
      <div>
        <a href="/">Logo </a>
      </div>
      
      <div className="nav">
      <ul style={{display:"flex", marginLeft:"10px"}}>
        <li style={{margin:"10px"}}>
          <Link to="/">Home</Link>
        </li>
        <li style={{margin:"10px"}}>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li style={{margin:"10px"}}>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
        </div>
        <div className="search">
          <input type="search" placeholder="Search" style={{width:'400px'}}/>
          
          <button>  
            <PersonOutlineIcon/>
          </button> 
        </div>
    </div>
  );

};

export default Header;
