import React, { Component } from "react";
import "./SearchResults.css";

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
        .map(item => (
          <li
            className="list-group-item"
            onClick={() => this.props.selectBook(item)}
          >
            <div className="col">
              <h1>{item["title_suggest"]}</h1>
              <h2>{item["author_name"]}</h2>
            </div>
          </li>
        ));
    return (
      <div
        className="search-results"
        style={{ height: 400, overflowY: "scroll" }}
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
