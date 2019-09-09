import React from 'react';
import { Header, Icon } from "semantic-ui-react";
const About = () => {
  return (
    <div className="jumbotron">
    <Header as="h1" icon textAlign="center">
      <Icon name="code" circular />
      <Header.Content>About BookFinder</Header.Content>
    </Header>

    <p>As far as I know, there is no single API for finding book covers directly from the book title. So, this app kind of fills that hole.</p>
    <p>First search and find your book, then find the cover.</p>
    <p>This is a open source project, you can find the source code at <a href="https://github.com/jamcry/react-book-finder" target="_blank" rel="noopener noreferrer"> the GitHub repository</a>.</p>

    <h2>Data Source</h2>
    <p>This app uses <a href="https://openlibrary.org/developers/api" target="_blank" rel="noopener noreferrer">OpenLibrary API</a> for retrieving data. You can refer to their website if anything is wrong with the data.</p>

    <h3>Developer</h3>
    <p>
      This app is developed by <a href="https://cemkiray.com" target="_blank" rel="noopener noreferrer"><b>JamCry</b></a>. It is created with React.js and Semantic UI for styling.
    </p>
  </div>
  );
}
 
export default About;