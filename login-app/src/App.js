import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import LoginUnsuccessful from './LoginUnsuccessful';
import LoggedIn from './LoggedIn';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleLogin = (username, password) => {
    // Simulate a simple login logic
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setLoginFailed(false);
    } else {
      setLoginFailed(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginFailed(false);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <LoggedIn handleLogout={handleLogout} />
      ) : (
        <div>
          {loginFailed && <LoginUnsuccessful />}
          <Login handleLogin={handleLogin} />
        </div>
      )}
    </div>
  );
}

export default App;
