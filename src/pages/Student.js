import React, { useEffect, useState, useContext } from "react";
import MyContext from "../store/MyContext";
const Student = () => {
  const [books, setBooks] = useState([]);
  const [bookLoading, setBookLoading] = useState(false);
  const [display, setDisplay] = useState(false);
  const ctx = useContext(MyContext);
  useEffect(() => {
    if (!ctx.isLoggedIn) {
      ctx.history.replace("/login");
    }
  }, [ctx.history, ctx.isLoggedIn]);
  useEffect(() => {
    setBookLoading(true);
    fetch("http://127.0.0.1:8000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
    setBookLoading(false);
  }, []);
  const onGetHandler = (e) => {
    setBookLoading(true);
    fetch("http://127.0.0.1:8000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
    setBookLoading(false);
    setDisplay((prev) => !prev);
  };

  return (
    <>
      <h1>Welcome to the Student Panel</h1>
      <div className="controls">
        <button onClick={(e) => onGetHandler(e)}>Get</button>
        {bookLoading && <h1>The Books are Loading</h1>}
        {books && display && (
          <ul>
            {books.map((book) => (
              <li key={book.BookId}>
                {book.BookId} {book.BookName} {book.BookCategory}{" "}
                {book.BookAuthor}{" "}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Student;
