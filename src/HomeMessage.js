import React from "react";
import { Header, Icon } from "semantic-ui-react";

const HomeMessage = () => {
  return (
    <>
      <Header as="h1" icon textAlign="center">
        <Icon name="book" circular />
        <Header.Content>Welcome to BookFinder!</Header.Content>
      </Header>
      <p>
        Enter keywords for your book (title, author, isbn, or else), then click
        the button.
      </p>
    </>
  );
};

export default HomeMessage;
