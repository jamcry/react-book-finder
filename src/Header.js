import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./App";
import BookFinder from "./BookFinder";
import About from "./About";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand" href="./">
          <span role="img" aria-label="books">
            📚
          </span>{" "}
          Book Finder
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#headerNavbarToggler"
          aria-controls="headerNavbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="headerNavbarToggler">
          <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
            <li className="nav-item">
              <Link to="./" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Go Top
              </a>
            </li>
          </ul>

          {/* SEARCH FORM
            <form className="form-inline my-2 my-lg-0 ml-auto">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            */}
        </div>
      </nav>
    </header>
  );
}
