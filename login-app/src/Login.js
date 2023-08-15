import React, { useState } from 'react';
import LoggedIn from './LoggedIn';
import LoginUnsuccessful from './LoginUnsuccessful';

const Login = ({ handleLogin }) => {
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [createdUsername, setCreatedUsername] = useState('');
  const [createdPassword, setCreatedPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [accountExistsError, setAccountExistsError] = useState(false);
  const [accountNotRecognizedError, setAccountNotRecognizedError] = useState(false);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginFields, setShowLoginFields] = useState(false);

  const handleSignUp = () => {
    if (signupUsername === createdUsername) {
      setAccountExistsError(true);
      return;
    }

    setCreatedUsername(signupUsername);
    setCreatedPassword(signupPassword);
    setIsSigningUp(false);
    setAccountExistsError(false);
  };

  const handleLoginWithExisting = () => {
    setShowLoginFields(true);
    setAccountNotRecognizedError(false);
    setLoginFailed(false);
  };

  const handleBack = () => {
    setShowLoginFields(false);
    setLoginFailed(false);
    setAccountNotRecognizedError(false);
    setAccountExistsError(false); // Clear the account exists error when going back
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSigningUp) {
      handleSignUp();
    } else {
      if (loginUsername === createdUsername && loginPassword === createdPassword) {
        handleLogin(loginUsername, loginPassword);
        setIsLoggedIn(true);
        setAccountNotRecognizedError(false);
        setLoginFailed(false);
      } else {
        setLoginFailed(true);
        setAccountNotRecognizedError(true);
      }
    }
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <LoggedIn handleLogout={() => setIsLoggedIn(false)} />
      ) : (
        <div>
          <div className="header">
            <h1>{isSigningUp ? 'Sign Up' : 'Log In'}</h1>
          </div>
          {accountExistsError && (
            <div className="form">
              <p>This account already exists.</p>
              <button className="button button-secondary" onClick={handleBack}>
                Back
              </button>
            </div>
          )}
          {accountNotRecognizedError && (
            <p className="error-message">
              Account not recognized - please check details or go back and create an account.
            </p>
          )}
          {loginFailed && <LoginUnsuccessful loginFailed={loginFailed} />}
          {isSigningUp && (
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Enter username"
                value={signupUsername}
                onChange={(e) => setSignupUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Enter password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
              />
              <button className="button button-primary" type="submit">
                Sign Up
              </button>
            </form>
          )}
          {!isSigningUp && (
            <button className="button button-primary" onClick={() => setIsSigningUp(true)}>
              Sign Up to Create Account
            </button>
          )}
          {!isSigningUp && (
            <button className="button button-secondary" onClick={handleLoginWithExisting}>
              Log In with Existing Account
            </button>
          )}
          <form className="form" onSubmit={handleSubmit}>
            {showLoginFields && (
              <div>
                <input
                  type="text"
                  placeholder="Enter username"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Enter password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button className="button button-primary" type="submit">
                  Log In
                </button>
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;


