import Link from 'next/link';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navBar"> {/* Use class names directly */}
    <div className="logoContainer">
        {/* Add your company logo here */}
        <img src="Images/logo.png" alt="Company Logo" className="logo" />
      </div>
    <ul className="navList">
    <li className="navItem">
          <Link href='/components/login'>
            <button className="navButton">Create Account</button>
          </Link>
    </li>
    
    <li className="navItem2">
          <Link href='/components/login'> 
            <button className="navButton">Login</button>
          </Link>
    </li>
        {/* Add more navigation items here */}
      </ul>
  </nav>
);
};

export default NavBar;