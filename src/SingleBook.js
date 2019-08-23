import React, { Component } from "react";
import Image from "./Image";
import { List, Button } from "semantic-ui-react";

class SingleBook extends Component {
  state={
    selected: false,
  }

  handleClick = () => {
    this.setState({ selected: true });
  }

  render() {
    return (

          <List.Item key={`book-${this.props.bookId}`}>
            <List.Content>
              <div className="row">
                  <div className="col-md-9">
                  <List.Header>
                    {this.props.book["title_suggest"]}
                  </List.Header>
                  {this.props.book["author_name"]}

                  </div>
                  <div className="col-md-3">
                  <Button
                    onClick={this.handleClick}
                    type="button"
                    data-toggle="collapse"
                    data-target={`#collapse-book-${this.props.bookId}`}
                    aria-expanded="false"
                    aria-controls={`collapse-book-${this.props.bookId}`}
                    content="Find cover"
                  />
                  </div>

              </div>
                  <div className="collapse" id={`collapse-book-${this.props.bookId}`}>
                    <div className="book-cover text-center">
                      {this.state.selected && <Image book={this.props.book}/>}
                    </div>
                  </div>
            </List.Content>
          </List.Item>
    );
  }
}

export default SingleBook;