import React from 'react';
import './bookCard.css';
function BookCard({ book, addToBookshelf }) {
  return (
    <div className='card'>
      <h3>{book.title}</h3>
      <p>{book.author_name && book.author_name.join(', ')}</p>
      {addToBookshelf && <button className='myBslf' onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>}
    </div>
  );
}

export default BookCard;