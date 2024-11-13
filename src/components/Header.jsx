import React from 'react';

const Header = () => {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    backgroundColor: '#f8f8f8',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const navbarStyle = {
    display: 'flex',
    gap: '15px',
  };

  const searchBarStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const inputStyle = {
    padding: '5px',
    fontSize: '14px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '5px 10px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>BooksWagon</div>
      <nav style={navbarStyle}>
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Offers</a>
        <a href="#">Contact</a>
      </nav>
      <div style={searchBarStyle}>
        <input type="text" placeholder="Search books, authors..." style={inputStyle} />
        <button style={buttonStyle}>Search</button>
      </div>
    </header>
  );
};

export default Header;
