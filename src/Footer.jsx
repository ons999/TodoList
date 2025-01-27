import React from 'react';
import './Footer.css';
const Footer = () => {
    const date=new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer-text">©{date} Debasish. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
