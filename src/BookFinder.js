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
    dimensions: {}
  }

  handleSearch = (text) => {
    const searchWords = text.split(" ");
    const query = searchWords.join("+");
    this.setState({selectedBook: '', data: '', loading: true})
    fetch(`http://openlibrary.org/search.json?q=${query}`)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, data }));
    //this.setState({ loading: false, data: mockData})
  }

  selectBook = (book) => {
    this.setState({selectedBook: book})
  }

  render() { 
    return (
      <>
      <SearchBar handleSearch={this.handleSearch} />
      {this.state.loading && "LOADING..."}
      {this.state.selectedBook && <Image book={this.state.selectedBook} /> }
      {this.state.data && <SearchResults data={this.state.data} selectBook={this.selectBook} />}
      </>
    );
  }
}
 
export default BookFinder;