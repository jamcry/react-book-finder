import React, { Component } from "react";

class Image extends Component {
  state = {
    dimensions: {}
  };

  checkDimensions = ({ target: img }) => {
    if (img.offsetHeight + img.offsetHeight < 5) alert("Not found!");
    this.setState({
      dimensions: {
        height: img.offsetHeight,
        width: img.offsetWidth
      }
    });
  };

  render() {
    let imgUrl = "";
    let imgPath = "";
    // Try isbn and oclc codes for cover url
    if(this.props.book["isbn"]) {
      let isbn = this.props.book["isbn"][0];
      imgPath = "isbn/" + isbn;
    } else if (this.props.book["oclc"]) {
      let oclc = this.props.book["oclc"];
      imgPath = "oclc/" + oclc;
    } else {
      imgPath = "isbn/000000";
    }

    imgUrl = `http://covers.openlibrary.org/b/${imgPath}-M.jpg`;

    return (
      <img
        onLoad={this.checkDimensions}
        onError={() => alert("Error loading image!")}
        src={imgUrl}
        alt={`Cover of ${this.props.book["title_suggest"]}`}
      />
    );
  }
}

export default Image;
