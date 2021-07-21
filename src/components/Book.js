import React from "react";

const Book = (props)=> {

  //switching between shelves function is responsible for handling the user choice of shelf
  const changeShelf = (event) => {
    const newShelf = event.target.value;

    const book = { ...props.book, shelf: newShelf };

    props.callback(book);
  };

  return (
    <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url( ${

                //coverimage for books with no thumbnails

                props.book.imageLinks?
                props.book.imageLinks.thumbnail : ""})`
            }}
          />
          <div className="book-shelf-changer">
            <select value={props.book.shelf} onChange={changeShelf}>
              <option disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
        {/*   */}
      </div>
    );
}

export default Book;
