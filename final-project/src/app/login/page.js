'use client';
import Link from "next/link";
import styles from "./login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from 'react';
import { useUserCtx } from "../context/UserContext";

import { API_URL } from "../../constants";

import axios from 'axios'
import { useRouter } from "next/navigation";

//Stephens code
/*
import axios from 'axios'; // Import Axios
import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext';
import { useRouter } from 'next/navigation';

*/
const Login =  () => {

  const {setUserData} = useUserCtx();
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [error, setError] = useState(null); // State to store error message

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/api/users/login`, {  email, password });
      const { data } = response;
      setUserData(data)
      router.push('/playlist')
      // router.push('/authenticated'); // Redirect to authenticated page
      setLoggedInUser(data.username); // Update loggedInUser state instead of redirecting
    } catch (error) {
      console.error(error)

      if (error.response) {
        console.error(error.response.data);
      }
      setError('Invalid username or password.');
    }
  };

  const handleLogout = () => {
    setUserData(null);
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  /*
  const router = useRouter();
  const { userData, setUserData } = useContext(UserContext);

  //redirect if user is already logged in
  useEffect(() => {
    if (userData.token) {
      router.push("/"); // redirect
    }
  }, [userData.token, router]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      //send login request to the server
      const response = await axios.post(
        "http://localhost:8086/login",
        formData
      );
      setUserData({
        token: response.data.token,
        user: response.data.user,
      });
      //store the authentication token in local storage
      localStorage.setItem("auth-token", response.data.token);
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
      //handle login error
    }
  };

  */

  const handleGoToHome = () => {
    // Redirect to the index page (home)
    router.push('/');
  };
  
  return (
    <> 
        <header className={styles.header}>
      <a href="/" className={styles.homeLink} onClick={handleGoToHome}>
  <img src="/Images/logo2.png" alt="Company logo" className={styles.logo} />
  </a>
      </header>

      <div className={styles.loginContainer}>
        {loggedInUser ? (
          <div className={styles.card}>
            <p>Welcome, {loggedInUser}!</p>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className={styles.card}>
            <h2> Log in to SoundPalette </h2>
            <hr className={styles.divisionLine} />
            {error && <p className={styles.error}>{error}</p>}{" "}
            {/* Display error message */}
            <div className={styles.inputContainer}>
              <label className={styles.label}>Email</label>
              <input
                type="text"
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.inputField}
              />
            </div>
            <div className={styles.inputContainer}>
              <label className={styles.label}>Password</label>
              <div className={styles.passwordInputWrapper}>
                <input
                  type={showPassword ? "text" : "password"} // Toggle between text and password type
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.inputField}
                />
                <div
                  className={styles.togglePassword}
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </div>
              </div>
            </div>
            {/* <Link href='/playlist'>  */}
            <button className={styles.loginButton} onClick={handleLogin}>
              Log In
            </button>
            {/* </Link> */}
            <hr className={styles.divisionLine} />
            <p>
              Don't have an account?
              <Link href='/components/createAccount'> 
                <span className={styles.signUpLink}>
                  {" "}
                  Sign up for SoundPalette
                </span>
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
