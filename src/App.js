import React from "react";
import "./App.css";
import Library from "./components/Library";
import Search from "./components/Search";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
  
  };


  // TODO: onLaunch books view


  //handleChange is the new books handler function it checks if the book exists in the Library or not
  handleBookChange = (newBook) => {
    // update state with new book
    const foundBook = this.state.books.find(
      (libraryBook) => libraryBook.id === newBook.id
    );

    const state = this.state;

    if (foundBook) {
      // the book already exists in our list
      // this is just a change of shelf
      foundBook.shelf = newBook.shelf;
    } else {
      // the book is new
      state.books.push(newBook);
    }

    this.setState(state);
  };

  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component={() => (
                <Library
                  books={this.state.books}
                  callback={this.handleBookChange}
                />
              )}
            />
            <Route
              path="/search"
              component={() => (
                <Search
                  books={this.state.books}
                  callback={this.handleBookChange}
                />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default BooksApp;
