import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    text: '',
  }

  handleChange = (e) => {
    const text = e.target.value; 
    this.setState({ text });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleSearch(this.state.text);
  }

  render() { 
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <button>Search</button>
      </form>
    );
  }
}
 
export default SearchBar;