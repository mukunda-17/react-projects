import React from 'react';

const BookDetailsPage = ({ book }) => {
  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default BookDetailsPage;
