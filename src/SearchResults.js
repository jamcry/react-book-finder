import React, { Component } from "react";
import "./SearchResults.css";

class SearchResults extends Component {
  state = {
    numOfBooksShowing: 4,
  };

  componentDidMount() {
    this.setState({numOfBooksShowing: 4,})
  }

  showMore = () => {
    this.setState(prev => ({numOfBooksShowing: prev.numOfBooksShowing + 4}));
  }

  render() {
    
    console.log(typeof this.props.data);
    const books =
      this.props.data &&
      this.props.data["docs"].slice(0,this.state.numOfBooksShowing).map(item => (
        <li onClick={() => this.props.selectBook(item)}>
          <div className="col">
          <h1>{item["title_suggest"]}</h1>
          <h2>{item["author_name"]}</h2>
          </div>
        </li>
      ));
    return (
      <div className="search-results">
        <ul>{books}</ul>
        {this.props.data && this.props.data.numFound > this.state.numOfBooksShowing && <button onClick={this.showMore}>Show more</button>}
      </div>
    );
  }
}

export default SearchResults;
