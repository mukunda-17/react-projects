import React from 'react';

const Footer = () => {
  const footerStyle = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    fontSize: '14px',
  };

  const linkStyle = {
    color: '#007bff',
    margin: '0 10px',
  };

  return (
    <footer style={footerStyle}>
      <p>© 2024 mukunda. All rights reserved.</p>
      <a href="#" style={linkStyle}>Privacy Policy</a>
      <a href="#" style={linkStyle}>Terms of Service</a>
    </footer>
  );
};

export default Footer;
