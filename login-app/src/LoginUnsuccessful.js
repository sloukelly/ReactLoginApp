import React from 'react';
import './styles.css'

const LoginUnsuccessful = ({ loginFailed, accountNotRecognizedError }) => {
  if (!loginFailed && !accountNotRecognizedError) {
    return null;
  }

  return (
    <div>
      {loginFailed && <p>Your username or password is incorrect.</p>}
      {accountNotRecognizedError && (
        <p>Account not recognized - please check details or go back and create an account.</p>
      )}
    </div>
  );
};

export default LoginUnsuccessful;


