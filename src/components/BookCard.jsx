import React from 'react';

const BookCard = ({ book }) => {
  const cardStyle = {
    width: '150px',
    border: '1px solid #ddd',
    padding: '15px',
    margin: '10px',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '100px',
    height: '150px',
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  return (
    <div style={cardStyle}>
      <img src={book.image || 'https://via.placeholder.com/100x150'} alt={book.title} style={imageStyle} />
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <button style={buttonStyle}>Add to Cart</button>
    </div>
  );
};

export default BookCard;
