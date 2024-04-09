import React from 'react';
import img from '../Images/logo4.jpg';
import '../Home/Home.css'
import { useNavigate } from 'react-router-dom';

// Define the Navbar component
function Navbar() {
  return (
    <div className="navbar">
      
      <div className="nav-links">
        <a href="/">HOME</a>
      </div>
      <div className="nav-links">
        <a href="/login">SIGN IN</a>
      </div>
      <div className="nav-links">
      <a href="register">CREATE A NEW ACCOUNT</a>
    </div>
    <div className="nav-links">
      <a href="/About">ABOUT US</a>
    </div>
    </div>
  );
}

const Home = () => {
  const navigate=useNavigate();
  const job=()=>{
    navigate('/books')
  }
  return (
    <div>
      {/* Render the Navbar component */}
      <Navbar />
      <div className='digital'>
        <div className='content'>
          <div className='logo'>
            <img src={img} alt='Logo' />
          </div>
          <h1>Welcome to Our Digital Library</h1>
          <h1>“A world without books is like a world without sunshine”</h1>
          <form>
            <button onClick={job}>START</button>
          </form>

          <p>For contact: DigitalLibrary@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
