import React, { Component } from "react";
import { Icon, Input } from "semantic-ui-react";

class SearchBar extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    const text = e.target.value;
    this.setState({ text });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSearch(this.state.text);
  };

  render() {
    return (
      <div className="col-md-6 mt-2 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <Input
              size="huge"
              action={{ icon: "search" }}
              placeholder="Enter the book info."
              onChange={this.handleChange}
              style={{ width: "100%" }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
