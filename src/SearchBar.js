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
      <div className="col-md-6 mt-2 mx-auto">
      <form onSubmit={this.handleSubmit}>
        <div className="form-group row">
        <input type="text" value={this.state.text} onChange={this.handleChange} className="form-control form-control-lg col-md-9" required/>
        <button className="btn btn-primary col-md-3">Search</button>
        </div>
        
      </form>
      </div>
    );
  }
}
 
export default SearchBar;