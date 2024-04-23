import Link from 'next/link';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
  return (
    <nav className="navBar"> {/* Use class names directly */}
    <div className="logoContainer">
        <img src="Images/logo.png" alt="Company Logo" className="logo" />
      </div>
    <ul className="navList">
    <li className="navItem">
<<<<<<<< HEAD:final-project/comps/NavBar.js
          <Link href="/createAccount"> 
            <button className="navButton">Create Account</button>
          </Link>
        </li>
        <li className="navItem">
          <Link href="/login"> 
========
          <Link href='/components/login'>
            <button className="navButton">Create Account</button>
          </Link>
    </li>
    
    <li className="navItem2">
          <Link href='/components/login'> 
>>>>>>>> c3dda5d (can change pages now):final-project/styles/navBar/page.js
            <button className="navButton">Login</button>
          </Link>
    </li>
        {/* Add more navigation items here */}
      </ul>
  </nav>
);
};

export default NavBar;