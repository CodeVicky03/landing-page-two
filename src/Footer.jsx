import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a company committed to providing the best services to our customers.
            Our mission is to deliver high-quality products that bring value and satisfaction.
          </p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@yourcompany.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Main St, City, Country</p>
        </div>
        <div className="footer-section newsletter">
          <h2>Newsletter</h2>
          <p>Subscribe to our newsletter to get the latest updates and offers.</p>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-section support">
          <h2>Support</h2>
          <ul>
            <li><a href="/support">Customer Support</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h2>Follow Us</h2>
          <a href="https://facebook.com">Facebook</a>
          <a href="https://twitter.com">Twitter</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://linkedin.com">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
