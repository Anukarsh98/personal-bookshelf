import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
function BookshelfPage() {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className='main'>
      <h1>My Bookshelf</h1>
      <div className='result'>
        {bookshelf.map(book => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookshelfPage;