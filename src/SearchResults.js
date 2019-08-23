import React, { Component } from "react";
import "./SearchResults.css";
import SingleBook from "./SingleBook";
import { Button, Header, Icon, Segment, List} from "semantic-ui-react";

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
          <SingleBook
            bookId={index}
            book={item}
          />
        ));
    return (
      <div
        className="search-results"
      >
        <Segment placeholder>
          <Header icon>
            <Icon name="pdf file outline" />
            Found 
          <span className="badge badge-pill badge-success mx-1 my-auto">
            {this.props.data.numFound}
          </span>
          results for "<b>{this.props.searchText}</b>".
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
