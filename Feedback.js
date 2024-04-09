import React, { useState } from 'react';
import '../Feedback/Feedback.css';
import { useNavigate } from 'react-router-dom';

const Feedback = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    feedback: '',
    rating: 0 // Initialize rating to 0
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleClick = () => {
    alert("Thank you for your feedback!");
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRatingChange = (rating) => {
    setFormData(prevState => ({
      ...prevState,
      rating: rating
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (formData.fullName && formData.email && formData.feedback && formData.rating > 0) {
      console.log(formData);
      // Send email here
      sendEmail();
      setFormData({
        fullName: '',
        email: '',
        feedback: '',
        rating: 0 // Reset rating to 0 after submission
      });
      setIsSubmitted(true);
      alert("Feedback submitted successfully!");
    } else {
      alert("Please fill in all required fields and provide a rating.");
    }
  };

  const sendEmail = () => {
    const mailtoLink = 'mailto:guna.amypo@gmail.com';
    window.location.href = mailtoLink;
  };

  // Star Component
  const Star = ({ selected = false, onClick = () => { } }) => (
    <span className={selected ? "fas fa-star checked" : "far fa-star"} onClick={onClick}></span>
  );

  // Star Rating Component
  const StarRating = ({ totalStars, selectedStars, onRate }) => (
    <div className="rating-container">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          selected={index < selectedStars}
          onClick={() => onRate(index + 1)}
        />
      ))}
    </div>
  );

  return (
    <div className="feedback-con">
      <h2>FEEDBACK</h2>
      {isSubmitted ? (
        <p className='submission-message'>Visit Again!!!</p>) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="feedback">Feedback:</label>
              <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} rows="5" required />
            </div>
            <div className="form-group">

            </div>
            <button onClick={sendEmail}>Send </button>
            <button type="submit" className="submit-button">Submit</button>
            
          </form>
        )}
    </div>
  );
};

export default Feedback;
