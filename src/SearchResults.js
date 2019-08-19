import React, { Component } from "react";
import "./SearchResults.css";
import SingleBook from "./SingleBook";

class SearchResults extends Component {
  state = {
    numOfBooksShowing: 4
  };

  componentDidMount() {
    this.setState({ numOfBooksShowing: 4 });
  }

  showMore = () => {
    this.setState(prev => ({ numOfBooksShowing: prev.numOfBooksShowing + 4 }));
  };

  render() {
    console.log(typeof this.props.data);
    const books =
      this.props.data &&
      this.props.data["docs"]
        .slice(0, this.state.numOfBooksShowing)
        .map((item, index) => (
          <li
            className="list-group-item"
            key={`book-${index}`}
          >
            <SingleBook
              bookId={`single-book-${index}`}
              book={item}
            />
          </li>
        ));
    return (
      <div
        className="search-results"
      >
        <h5>
          Found{" "}
          <span className="badge badge-success">
            {this.props.data.numFound}
          </span>
        </h5>
        <ul className="list-group">{books}</ul>
        {this.props.data &&
          this.props.data.numFound > this.state.numOfBooksShowing && (
            <button className="btn btn-warning mt-3" onClick={this.showMore}>
              Show more
            </button>
          )}
      </div>
    );
  }
}

export default SearchResults;
