import React from 'react';
import Header from './components/Header';
import CategorySidebar from './components/CategorySidebar';
import BookCard from './components/BookCard';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

const App = () => {
  const books = [
    { title: 'Book 1', author: 'Author 1', price: 10, image: 'https://via.placeholder.com/100x150' },
    { title: 'Book 2', author: 'Author 2', price: 15, image: 'https://via.placeholder.com/100x150' },
  ];

  const carouselItems = [
    { image: 'https://via.placeholder.com/300x150' },
    { image: 'https://via.placeholder.com/300x150' },
  ];

  const mainStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
  };

  const contentStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  };

  return (
    <div>
      <Header />
      <Carousel items={carouselItems} />
      <div style={mainStyle}>
        <CategorySidebar />
        <div style={contentStyle}>
          {books.map((book, index) => (
            <BookCard key={index} book={book} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
