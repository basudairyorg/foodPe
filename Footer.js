import React from "react";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>We are passionate about delivering the best food experiences to our customers. Our recipes are crafted with love and the finest ingredients.</p>
          </div>
          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: info@foodwebsite.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Food Street, Flavor Town</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Food Website. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  
  export default Footer;