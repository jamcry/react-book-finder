import React from 'react';
import BookFinder from "./BookFinder";
import Header from "./Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="mt-5 pt-2">
      <BookFinder />
      </div>
    </div>
  );
}

export default App;
