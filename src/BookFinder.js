import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import mockData from "./mockData";
import Image from "./Image";
class BookFinder extends Component {
  state = {
    data: '',
    loading: false,
    selectedBook: '',
  }

  handleSearch = (text) => {
    // Convert input into query format
    const searchWords = text.split(" ");
    const query = searchWords.join("+");
    // Reset the previous state, if any
    this.setState({data: '', selectedBook: '',  loading: true});
    fetch(`http://openlibrary.org/search.json?q=${query}`)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, data }));
    // Mock API fetch using previously fetched and saved data
    // this.setState({ loading: false, data: mockData})
  }

  selectBook = (book) => {
    this.setState({selectedBook: book})
  }

  render() { 
    return (
      <>
      <div className="jumbotron p-3">
      <SearchBar handleSearch={this.handleSearch} />
      </div>
      { // Show "loading" msg if the fetching is going on
        this.state.loading && "LOADING..."}
      <div className="row">
        <div className="col-md-5">
          { // Load the cover img if a book is selected
            this.state.selectedBook && <Image book={this.state.selectedBook} /> }

        </div>
        <div className="col-md-7" >
          { // List search results if data has been fetched
            this.state.data && <SearchResults data={this.state.data} selectBook={this.selectBook} />}

        </div>
      </div>
      </>
    );
  }
}
 
export default BookFinder;