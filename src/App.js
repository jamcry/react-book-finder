import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookFinder from "./BookFinder";
function App() {
  return (
    <div className="App">
      <h1>Book Finder</h1>
      <p>Find books, then covers.</p>
        <BookFinder />
    </div>
  );
}

export default App;
