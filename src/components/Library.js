import React from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";

class Library extends React.Component {
  state = {
    books: [],
  };

  render() {
    const { books } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              title="Currently Reading"
              callback={this.props.callback}
              books={books.filter((b) => b.shelf === "currentlyReading")}
            />
            <Shelf
              title="Want to read"
              callback={this.props.callback}
              books={books.filter((b) => b.shelf === "wantToRead")}
            />
            <Shelf
              title="Read"
              callback={this.props.callback}
              books={books.filter((b) => b.shelf === "read")}
            />
            <div className="open-search">
              <Link to="/search">
                <button />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Library;
