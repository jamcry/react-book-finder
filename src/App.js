import React from 'react';
import logo from './logo.svg';
import './App.css';
import BookFinder from "./BookFinder";
import Header from "./Header";
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
