import React from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import CategorySidebar from '../components/CategorySidebar';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';

const HomePage = () => {
  const books = [
    { id: 1, title: "Book 1", author: "Author 1", price: 10, coverImage: "book1.jpg" },
    { id: 2, title: "Book 2", author: "Author 2", price: 15, coverImage: "book2.jpg" }
  ];

  return (
    <div className="homepage">
      <Header />
      <Carousel images={["banner1.jpg", "banner2.jpg"]} />
      <div className="main-content">
        <CategorySidebar />
        <div className="book-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
