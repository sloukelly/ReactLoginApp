import React from 'react';
import './styles.css'

const LoggedIn = ({ handleLogout }) => {
  return (
    <div>
      <h1>Welcome, you have successfully logged in!</h1>
      <button className="sign-out-button" onClick={handleLogout}>Sign Out</button>
    </div>
  );
};

export default LoggedIn;
