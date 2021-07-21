import React from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
import * as BooksAPI from "../BooksAPI";

class Search extends React.Component {
  state = {
    searchResults: [],
  };

  //Searching the API for the useripnut and return the list that matches from API library
  search = (e) => {
    const query = e.target.value;

    if (!query) {
      this.setState({ searchResults: [] });
      return;
    }

    BooksAPI.search(query).then((books) => {
      if (books.error) {
        // no results found

        console.log("no results found for query: ", query);

        books = [];
      }

      this.setState({ searchResults: books });
    });
  };

  render() {
    const booksInLibrary = this.props.books;
    //checking if the books the user chose in search page already exist in library page, if they exist return the shelf and update the book choosen in the search page

    for (let book of this.state.searchResults) {
      const foundBook = booksInLibrary.find(
        (libraryBook) => libraryBook.id === book.id
      );

      if (foundBook) {
        book.shelf = foundBook.shelf;
      } else {
        book.shelf = "none";
      }
    }

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              onChange={this.search}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <Shelf
            title="Results"
            callback={this.props.callback}
            books={this.state.searchResults}
          />
        </div>
      </div>
    );
  }
}

export default Search;
