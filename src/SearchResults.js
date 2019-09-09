import React, { Component } from "react";
import "./SearchResults.css";
import SingleBook from "./SingleBook";
import { Header, Icon, Segment, List } from "semantic-ui-react";

class SearchResults extends Component {
  state = {
    numOfBooksShowing: 4
  };

  // Reset number of books showing everytime the results is mounted
  componentDidMount() {
    this.setState({ numOfBooksShowing: 4 });
  }

  // Increment the number of books showing by 4
  showMore = () => {
    this.setState(prev => ({ numOfBooksShowing: prev.numOfBooksShowing + 4 }));
  };

  // Maps the book data to SingleBook components
  createBookComponents = data => {
    return (
      data &&
      data["docs"]
        .slice(0, this.state.numOfBooksShowing)
        .map((item, index) => (
          <SingleBook key={"book-" + index} bookId={index} book={item} />
        ))
    );
  };
  
  render() {
    // Slice out the first element which is data head
    const books = this.createBookComponents(this.props.data);
    const hasResults = !!books.length;
    const iconNames = hasResults ? "book" : "warning circle";
    const badgeClass = hasResults ? "badge-success" : "badge-danger";
    return (
      <div className="search-results">
        <Segment placeholder>
          <Header icon>
            <Icon name={iconNames} />
            Found
            <span className={`badge badge-pill ${badgeClass} mx-1 my-auto`}>
              {this.props.data.numFound}
            </span>
            results for "<em>{this.props.searchText}</em>".
          </Header>
          <List celled size="big">
            {books}
          </List>
          {this.props.data &&
            this.props.data.numFound > this.state.numOfBooksShowing && (
              <button className="btn btn-warning mt-3" onClick={this.showMore}>
                Show more
              </button>
            )}
        </Segment>
      </div>
    );
  }
}

export default SearchResults;
