import React, { useState } from "react";
const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const buttonClickHandler = (e) => {
    setLoading(true);
    fetch("http://127.0.0.1:8000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
    setLoading(false);
  };
  return (
    <>
      <h1>This page is for students</h1>
      <div>
        Please click here to get the books details.
        <button onClick={(e) => buttonClickHandler(e)}>Get Books</button>
      </div>
      {loading && <h1>The Books are Loading</h1>}
      {books && (
        <ul>
          {books.map((book) => (
            <li key={book.BookId}>
              {book.BookId} {book.BookName} {book.BookCategory}
              {book.BookAuthor}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Books;
