'use client'
import React from 'react';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
      console.log('Username:', username);
      console.log('Password:', password);
      setUsername('');
      setPassword('');
    };
  
    return (
      <div className="login-container">
        <LoginForm
          username={username}
          password={password}
          onSubmit={handleSubmit}
          onUsernameChange={(e) => setUsername(e.target.value)}
          onPasswordChange={(e) => setPassword(e.target.value)}
        />
      </div>
    );
  };

export default Login;
