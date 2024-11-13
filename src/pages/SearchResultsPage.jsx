import React from 'react';
import BookCard from '../components/BookCard';

const SearchResultsPage = ({ results }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <div className="results-grid">
        {results.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
