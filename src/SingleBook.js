import React, { Component } from "react";
import Image from "./Image";

class SingleBook extends Component {
  state={
    selected: false,
  }

  handleClick = () => {
    this.setState({ selected: true });
  }

  render() {
    return (
      <div className="col">
        <h1>{this.props.book["title_suggest"]}</h1>
        <h2>{this.props.book["author_name"]}</h2>
        <button
          className="btn btn-primary"
          onClick={this.handleClick}
          type="button"
          data-toggle="collapse"
          data-target={`#collapse-book-${this.props.bookId}`}
          aria-expanded="false"
          aria-controls={`collapse-book-${this.props.bookId}`}>
          Find cover
        </button>
        <div className="collapse" id={`collapse-book-${this.props.bookId}`}>
          <div className="book-cover">
            {this.state.selected && <Image book={this.props.book} />}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBook;