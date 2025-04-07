import React, { useState } from 'react';  
import './Contact.css'; // Importing the CSS file for styles  

// Contact Component  
const Contact = () => {  
  const [companyName, setCompanyName] = useState('');  
  const [email, setEmail] = useState('');  
  const [phone, setPhone] = useState(''); // New state for phone  
  const [message, setMessage] = useState('');  

  const handleSubmit = (e) => {  
    e.preventDefault();  
    // Here you would typically handle form submission, e.g., sending an email or storing it  
    alert(`Message sent! \nCompany: ${companyName} \nEmail: ${email} \nPhone: ${phone} \nMessage: ${message}`);  
    // Clear the form after submission  
    setCompanyName('');  
    setEmail('');  
    setPhone('');  // Clear the phone input  
    setMessage('');  
  };  

  return (  
    <div className="contact-container">  
      <h2>Contact Us</h2>  
      <form onSubmit={handleSubmit} className="contact-form">  
        <div className="form-group">  
          <label htmlFor="company-name">Company Name:</label>  
          <input  
            type="text"  
            id="company-name"  
            className="form-input"  
            placeholder="Your Company Name"  
            value={companyName}  
            onChange={(e) => setCompanyName(e.target.value)}  
            required  
          />  
        </div>  
        
        <div className="form-group">  
          <label htmlFor="email">Email Address:</label>  
          <input  
            type="email"  
            id="email"  
            className="form-input"  
            placeholder="Your Email"  
            value={email}  
            onChange={(e) => setEmail(e.target.value)}  
            required  
          />  
        </div>  
        
        <div className="form-group">  
          <label htmlFor="phone">Phone Number:</label>  {/* New phone field */}  
          <input  
            type="text"  
            id="phone"  
            className="form-input"  
            placeholder="Your Phone Number"  
            value={phone}  
            onChange={(e) => setPhone(e.target.value)}  
            required  
          />  
        </div>  

        <div className="form-group">  
          <label htmlFor="inquiry">Enquiry:</label>  
          <textarea  
            id="inquiry"  
            className="form-textarea"  
            placeholder="Your Inquiry"  
            value={message}  
            onChange={(e) => setMessage(e.target.value)}  
            required  
          />  
        </div>  
        
        <button type="submit" className="submit-button">Send</button> {/* Changed button text to "Send" */}  
      </form>  
      
      <p className="thank-you-message">Thank you for reaching out! We'll get back to you as soon as possible.</p>  
      
      <div className="contact-info">  
        <h2>Contact Information</h2>  
        <p>Address: Ijinda by NTA Road, Mgbuoba - Port Harcourt, Nigeria</p>  
        <p>Phone: +234 808 7388 118</p> {/* Example phone number */}  
      </div>  
      
        
    </div>  
  );  
};  

export default Contact;  