import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home/Home';
import SignInSide from './SignInSide/SignInSide';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Register from './ForgotPassword/Register/Register';
import Feedback from './Feedback/Feedback';
import AboutUs from './Aboutus/Aboutus';
import Download from './Download/Download';
import FullstackBooks from './FullstackBooks/FullstackBooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
