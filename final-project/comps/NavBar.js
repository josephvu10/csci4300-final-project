import Link from 'next/link';
<<<<<<< HEAD:final-project/src/app/components/NavBar.js
import './NavBar.css';
import Login from './Login';
=======
import styles from '../styles/NavBar.module.css'
>>>>>>> origin/restructure:final-project/comps/NavBar.js

const NavBar = () => {
  return (
    <nav className="navBar"> {/* Use class names directly */}
    <div className="logoContainer">
        <img src="Images/logo.png" alt="Company Logo" className="logo" />
      </div>
    <ul className="navList">
    <li className="navItem">
          <Link href="/createAccount"> 
            <button className="navButton">Create Account</button>
          </Link>
        </li>
        <li className="navItem">
<<<<<<< HEAD:final-project/src/app/components/NavBar.js
          <Link href="../../components/Login"> 
=======
          <Link href="/login"> 
>>>>>>> origin/restructure:final-project/comps/NavBar.js
            <button className="navButton">Login</button>
          </Link>
        </li>
        {/* Add more navigation items here */}
      </ul>
  </nav>
);
};

export default NavBar;