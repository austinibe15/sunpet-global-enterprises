import React from 'react';  
import sunpetLogo from './assets/sunpet-logo.png'; // Import your logo  
import certificateImage from './assets/certificate-of-incorporation.pdf'; // Path to Certificate of Incorporation  
import './App.css';  
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  
import ServiceList from './components/ServiceList'; // Importing ServiceList component  
import ProductList from './components/ProductList'; // Importing ProductList component  
import Contact from './components/Contact'; // Importing Contact component  
import AboutUs from './components/AboutUs'; // Importing AboutUs component   
import ceoVideo from './assets/Welcome to Sunpet Global Enterprises.mp4'; // Path to CEO introduction video  

const HomePage = () => {  
  return (  
    <div className="home-container">  
      {/* Hero Section with CEO Video */}  
      <div className="hero-section">  
        <video controls width="100%" autoPlay muted className="ceo-video">  
          <source src={ceoVideo} type="video/mp4" />  
          Your browser does not support the video tag.  
        </video>  
        <div className="video-overlay">  
          <h1>Welcome to Sunpet Global Enterprises</h1>  
          <Link to="/aboutus">  
            <button className="explore-button">Explore More</button>  
          </Link>  
        </div>  
      </div>  

      <h2>Certificate of Incorporation</h2>  
      <embed  
        src={certificateImage}  
        type="application/pdf"  
        width="100%"  
        height="500px"  
        title="Certificate of Incorporation"  
      />  

      <h2>Mission Statement</h2>  
      <p>  
        Our mission is to provide high-quality products and services that meet the needs of our clients while ensuring sustainable practices and corporate excellence.  
      </p>  

      <h2>Goals</h2>  
      <ul>  
        <li>To be a leader in the oil and gas industry.</li>  
        <li>To foster long-term relationships with our clients and partners.</li>  
        <li>To prioritize safety, quality, and environmental sustainability in all operations.</li>  
        <li>To continuously innovate and improve our services and offerings.</li>  
      </ul>  

      <p>Showcasing our products and services.</p>  
      <div className="button-links">  
        <Link to="/services" className="App-link">View Financial Services</Link>  
        <br />  
        <Link to="/products" className="App-link">View Our Products</Link>  
        <br />  
        <Link to="/contact" className="App-link">Contact Us</Link>  
        <br />  
        <Link to="/aboutus" className="App-link">About Us</Link>   
        <br />  
      </div>  
    </div>  
  );  
};  

function App() {  
  return (  
    <Router>  
      <div className="App">  
        <header className="App-header">  
          <img src={sunpetLogo} className="App-logo" alt="Sunpet Global Enterprises Logo" />  
          <nav className="App-nav">  
            <Link to="/" className="App-link">Home</Link>  
            <Link to="/services" className="App-link">Services</Link>  
            <Link to="/products" className="App-link">Products</Link>  
            <Link to="/contact" className="App-link">Contact</Link>  
            <Link to="/aboutus" className="App-link">About Us</Link>  
          </nav>  
        </header>  
        <Routes>  
          <Route path="/" element={<HomePage />} />  
          <Route path="/services" element={<ServiceList />} />  
          <Route path="/products" element={<ProductList />} />  
          <Route path="/contact" element={<Contact />} />  
          <Route path="/aboutus" element={<AboutUs />} />   
        </Routes>  
        <footer className="bg-dark text-white text-center p-3 mt-4">  
          <p>&copy; {new Date().getFullYear()} Sunpet Global Enterprises. All rights reserved.</p>  
        </footer>  
      </div>   
    </Router>  
  );  
}  

export default App;  