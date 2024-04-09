import React, { useState } from 'react';
import './Download.css'; // Assuming you have saved the CSS code in a file named Download.css

const Download = () => {
  // Sample data for library items
  const libraryItems = [
    { id: 1, title: 'Book 1', author: 'Author 1', url: 'https://example.com/book1.pdf' },
    { id: 2, title: 'Book 2', author: 'Author 2', url: 'https://example.com/book2.pdf' },
    { id: 3, title: 'Book 3', author: 'Author 3', url: 'https://example.com/book3.pdf' },
    // Add more items as needed
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    selectedBook: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleDownload = (url) => {
    // Function to handle download
    window.open(url, '_blank');
    // You can also handle the form data as per your requirements, like sending it to a server, etc.
    console.log('Form Data:', formData);
  };

  return (
    <div className="download-container">
      <h1>Digital Library</h1>
      <div className="library-container">
        {libraryItems.map(item => (
          <div key={item.id} className="library-item">
            <h2>{item.title}</h2>
            <p>Author: {item.author}</p>
            <button onClick={() => handleDownload(item.url)}>Download</button>
          </div>
        ))}
      </div>
      <div className="user-details">
        <h2>User Details</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
          <label htmlFor="selectedBook">Select Book:</label>
          <select id="selectedBook" name="selectedBook" value={formData.selectedBook} onChange={handleInputChange} required>
            <option value="">Select a book</option>
            {libraryItems.map(item => (
              <option key={item.id} value={item.url}>{item.title}</option>
            ))}
          </select>
          <button onClick={() => handleDownload(formData.selectedBook)}>Download Selected Book</button>
        </form>
      </div>
    </div>
  );
};

export default Download;
