import React from "react";

const Book = (props)=> {

  //switching between shelves function is responsible for handling the user choice of shelf
  const changeShelf = (event) => {
    const newShelf = event.target.value;

    const book = { ...props.book, shelf: newShelf };

    this.props.callback(book);
  };
  const coverImage = (props) =>{
    if(props.book.imageLinks.thumbnail) {
      return props.book.imageLinks.thumbnail
    }else {
      return props.book.imageLinks
    }
  }

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url( ${coverImage}`,
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
