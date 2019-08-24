import React, { Component } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
// eslint-disable-next-line
import mockData from "./mockData";
import LoadingSpinner from "./LoadingSpinner";
import { Header, Icon } from "semantic-ui-react";
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
        {!this.state.data && !this.state.loading && (
          <div>
            <Header as="h1" icon textAlign="center">
              <Icon name="book" circular />
              <Header.Content>Welcome to BookFinder!</Header.Content>
            </Header>
            <p>
              Enter keywords for your book (title, author, isbn, or else), then
              click the button.
            </p>
          </div>
        )}
        {this.state.loading && <LoadingSpinner />}
        <div className="row">
          <div className="col-md-7 m-auto">
            {/* List search results if data has been fetched */}
            {this.state.data && (
              <SearchResults
                data={this.state.data}
                searchText={this.state.searchText}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}

export default BookFinder;
