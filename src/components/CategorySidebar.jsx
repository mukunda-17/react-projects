import React from 'react';

const CategorySidebar = () => {
  const sidebarStyle = {
    width: '200px',
    padding: '20px',
    backgroundColor: '#f4f4f4',
  };

  const headingStyle = {
    fontWeight: 'bold',
  };

  const listStyle = {
    listStyleType: 'none',
    padding: '0',
  };

  const listItemStyle = {
    margin: '10px 0',
  };

  return (
    <div style={sidebarStyle}>
      <h3 style={headingStyle}>Categories</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>Fiction</li>
        <li style={listItemStyle}>Non-fiction</li>
        <li style={listItemStyle}>Science</li>
        <li style={listItemStyle}>Technology</li>
        <li style={listItemStyle}>History</li>
        <li style={listItemStyle}>Children's Books</li>
      </ul>
    </div>
  );
};

export default CategorySidebar;
