import React from 'react';  
import { Link } from 'react-router-dom'; // Import Link  
import './ProductList.css'; // Import the CSS file for styling  

// Sample data for products  
const productsData = [  
  {  
    name: "Bonny Light Crude Oil (BLCO)",  
    description: "A high-quality crude oil known for its low sulfur content, suitable for refineries and meets NNPC specification standards.",  
    procedure: "To order BLCO, please contact our sales team with the required specifications."  
  },  
  {  
    name: "Automated Gas Oil (AGO)",  
    description: "A diesel fuel product used in various industrial applications, compliant with NNPC specification standards.",  
    procedure: "For AGO purchases, please provide your company details and intended use."  
  }  
];  

// Products available through partners  
const partnerProducts = [  
  {  
    name: "Premium Motor Spirit (PMS)",  
    description: "A high-octane gasoline used in vehicles, adhering to NNPC specification standards.",  
    procedure: "Consultation available upon request."  
  },  
  {  
    name: "Dual Purpose Kerosene (DPK)",  
    description: "A versatile kerosene product suitable for heating and cooking, meeting NNPC specification standards.",  
    procedure: "Consultation available upon request."  
  },  
  {  
    name: "Low Pour Fuel Oil (LPFO)",  
    description: "A heavy fuel oil used for power generation and industrial processes, compliant with NNPC specification standards.",  
    procedure: "Consultation available upon request."  
  }  
];  

// ProductList Component  
const ProductList = () => {  
  return (  
    <div className="product-list-container">  
      <h2>Our Products</h2>  

      {/* Display available products */}  
      <h3>Available Products</h3>  
      <ul className="product-list">  
        {productsData.map((product, index) => (  
          <li key={index}>  
            <strong>{product.name}</strong>: {product.description}<br />  
            <em>{product.procedure}</em>  
          </li>  
        ))}  
      </ul>  

      {/* Display consultation products */}  
      <h3>Consultation Products</h3>  
      <ul className="partner-products-list">  
        {partnerProducts.map((product, index) => (  
          <li key={index}>  
            <strong>{product.name}</strong>: {product.description}<br />  
            <em>{product.procedure}</em>  
          </li>  
        ))}  
      </ul>  

      {/* Additional information about procedures */}  
      <p>  
        We can deal on the following procedure bases:  
        <ul>  
          <li><strong>CIF (Cost, Insurance, and Freight)</strong></li>  
          <li><strong>TTO (Tanker Take Over)</strong></li>  
          <li><strong>TTT (Tanker To Tanker)</strong></li>  
        </ul>  
        For BLCO, we can specifically do CIF to Ghana Waters.  
      </p>  
      
      {/* Button Link to Contact Page */}  
      <Link to="/contact">  
        <button className="contact-button">Contact Us for Inquiries</button>  
      </Link>  
    </div>  
  );  
};  

export default ProductList;  