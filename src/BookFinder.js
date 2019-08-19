import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import mockData from "./mockData";
import LoadingSpinner from "./LoadingSpinner";

class BookFinder extends Component {
  state = {
    data: "",
    loading: false
  };

  handleSearch = text => {
    // Convert input into query format
    const searchWords = text.split(" ");
    const query = searchWords.join("+");
    // Reset the previous state, if any
    this.setState({ data: "", selectedBook: "", loading: true });
    // fetch(`http://openlibrary.org/search.json?q=${query}`)
    //   .then(response => response.json())
    //   .then(data => this.setState({ loading: false, data }));
    //Mock API fetch using previously fetched and saved data
    this.setState({ loading: false, data: mockData });
  };

  render() {
    return (
      <>
        <div className="jumbotron p-3">
          <SearchBar handleSearch={this.handleSearch} />
        </div>
        {this.state.loading && <LoadingSpinner />}
        <div className="row">
          <div className="col-md-7 m-auto">
            {/* List search results if data has been fetched */}
            {this.state.data && <SearchResults data={this.state.data} />}
          </div>
        </div>
      </>
    );
  }
}

export default BookFinder;
