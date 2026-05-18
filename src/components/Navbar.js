import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/logo/logo.png';    
function Navbar() {
  return (
    <nav className="navbar">
     <div className="logo">

  <img src={logo} alt="Zenvo Logo" />

  <span>Zenvo</span>

</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;