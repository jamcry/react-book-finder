import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";
class Image extends Component {
  state = {
    loading: true,
    dimensions: {},
    failed: false,
  };

  checkDimensions = ({ target: img }) => {
    const failed = (img.offsetHeight + img.offsetHeight < 5);
    this.setState({
      loading: false,
      dimensions: {
        height: img.offsetHeight,
        width: img.offsetWidth,
      },
      failed: failed,
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
      <>
      { this.state.loading && <LoadingSpinner /> }
      {
        (this.state.failed) ?
        <div className="alert alert-danger" role="alert">
          Cover not found!
        </div>
        :
        <img
          onLoad={this.checkDimensions}
          onError={() => alert("Error loading image!")}
          src={imgUrl}
          alt={`Cover of ${this.props.book["title_suggest"]}`}
        />
      }
      </>
    );
  }
}

export default Image;
