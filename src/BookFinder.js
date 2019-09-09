import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
// eslint-disable-next-line
import mockData from "./mockData";
import HomeMessage from "./HomeMessage";
import { Loader } from "semantic-ui-react";

class BookFinder extends Component {
  state = {
    data: "",
    loading: false,
    searchText: ""
  };

  handleSearch = text => {
    // Convert input into query format
    const searchWords = text.split(" ");
    const query = searchWords.join("+");
    // Reset the previous state, if any
    this.setState({ data: "", loading: true });
    fetch(`https://openlibrary.org/search.json?q=${query}`)
      .then(response => response.json())
      .then(data => this.setState({ loading: false, searchText: text, data }));
    // Mock API fetch using previously fetched and saved data
    //  this.setState({ loading: false, data: mockData, searchText: text });
  };

  render() {
    return (
      <>
        <div className="jumbotron p-3 bg-light">
          <SearchBar handleSearch={this.handleSearch} />
        </div>
        <div className="container">
          {/* Show the greeting message if no data is present */}
          {!this.state.data && !this.state.loading && <HomeMessage />}
          {/* Show loading spinner while search results are loading */}
          {this.state.loading && <Loader size="massive" active inline />}
          {/* List search results if data has been fetched */}
          {this.state.data && (
            <SearchResults
              data={this.state.data}
              searchText={this.state.searchText}
            />
          )}
        </div>
      </>
    );
  }
}

export default BookFinder;
