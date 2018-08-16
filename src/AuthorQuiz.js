import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./bootstrap.css";

function Hero() {
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book written by author shown</p>
      </div>
    </div>
  );
}

function Turn(author, books) {
  return (
    <div className="row turn" style={{ backgroundColor: "red" }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} alt="Author" className="authorimage" />
      </div>
      <div className="col-6">
        {books.map(title => (
          <p>{title}</p>
        ))}
      </div>
    </div>
  );
}

function Continue() {
  return <div />;
}

function Footer() {
  return (
    <div className="row" id="footer">
      <div className="col-12">
        <p className="text-muted credit">
          All images are from Wikimedia commons
        </p>
      </div>
    </div>
  );
}

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default AuthorQuiz;
