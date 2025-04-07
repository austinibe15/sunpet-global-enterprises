import React from 'react';  
import { Link } from 'react-router-dom'; // Import Link  
import './ServiceList.css'; // Import the CSS file for styling  

// Sample data for financial services  
const servicesData = [  
  {  
    name: "Issuance of Bank Guarantee (BG)",  
    ltvRate: "00%",  
  },  
  {  
    name: "Block Fund (BF)",  
    ltvRate: "00%",  
  },  
  {  
    name: "Bank Endorsed Cheque (BEC)",  
    ltvRate: "00%",  
  },  
  {  
    name: "Bank Assurance Letter (BL)",  
    ltvRate: "00%",  
  },  
];  

// ServiceList Component  
const ServiceList = () => {  
  return (  
    <div className="service-list-container">  
      <h2>Financial Services</h2>  
      <ul className="service-list">  
        {servicesData.map((service, index) => (  
          <li key={index} className="service-item">  
            <strong>{service.name}</strong>: LTV Rate - {service.ltvRate}  
          </li>  
        ))}  
      </ul>  
      <p>If you're interested in any of these services, please send us a request, and we will provide you with the procedures and LTV rates respectively!</p>  
      <p>We also offer other financial services not included in this list. Please contact us to let us know the exact financial instrument needed and the amount.</p>  

      {/* Button Link to Contact Page */}  
      <Link to="/contact">  
        <button className="contact-button">Contact Us for Inquiries</button>  
      </Link>  
    </div>  
  );  
};  

export default ServiceList;  