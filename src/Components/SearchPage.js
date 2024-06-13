import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';
import './searchPage.css';
function SearchPage() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query) {
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => setResults(data.docs));
    }
  }, [query]);

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    bookshelf.push(book);
    localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
  };

  return (
      <div className='main'>
        <h2>Search By Book Name</h2>
        
        <input 
        className='search'
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search for a book"
        />
      
        <button className='myBslf' onClick={() => window.location.href='/bookshelf'}>My Bookshelf</button>

        
        
     
        <div className='result' >
        {results.map(book => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
        </div>
      </div>
  );
}

export default SearchPage;