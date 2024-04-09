import React, { useState } from 'react';
import './Register.css';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (password.length < 10) {
      alert('Password should be at least 10 characters long.');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match. Please re-enter.');
    } else {
      // Proceed with creating the account
      navigate('/login');
    }
  };

  return (
    <div id='holer'>
      <center>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h1 style={{ marginLeft: '10px', color: 'blue' }}>DIGITAL LIBRARY</h1>
        </div>
        <div id='rbody'>
          <h1 id='reg'>SIGNUP</h1>
          <h3 id='label'>FULL NAME</h3>
          <input type='text' placeholder='ENTER THE NAME' id='input'required></input>
          <h3 id='label'>EMAIL ID</h3>
          <input type='email' placeholder='EMAIL ID' id='input'required></input>
          <h3 id='label'>PASSWORD</h3>
          <input
            type='password'
            placeholder='PASSWORD'
            id='input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}required
          ></input>
          <h3 id='label'>CONFIRM PASSWORD</h3>
          <input
            type='password'
            placeholder='CONFIRM PASSWORD'
            id='input'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}required
          ></input>
          <br></br>
          <br></br>
          <button onClick={handleCreateAccount} id='regbutton'>
            CREATE AN ACCOUNT
          </button>
          <br></br>
          <br></br>
          <p id='nm'>
            ALREADY HAVE AN ACCOUNT?
            <a href='/login' id='mn'>
              {' '}
              LOGIN
            </a>
          </p>
        </div>
      </center>
    </div>
  );
};

export default Register;
