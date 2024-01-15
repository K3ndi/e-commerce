import { Link } from "react-router-dom";
import "../../styles/header/header.scss"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Header: React.FC = () => {


  return (
    <div className="header">
      <div className="logo">
        <a href="/">Logo </a>
      </div>
      
      <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
        </div>
        <div className="search" >
          <input type="search" placeholder=" What are you looking for?" 
            />
          
          <button >  
            <PersonOutlineIcon/>
          </button> 
        </div>
    </div>
  );

};

export default Header;
