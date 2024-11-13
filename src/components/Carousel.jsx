import React from 'react';

const Carousel = ({ items }) => {
  const carouselStyle = {
    display: 'flex',
    overflowX: 'scroll',
    padding: '10px',
    gap: '10px',
    backgroundColor: '#f8f8f8',
  };

  return (
    <div style={carouselStyle}>
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.image || 'https://via.placeholder.com/300x150'} alt="banner" />
        </div>
      ))}
    </div>
  );
};

export default Carousel;
