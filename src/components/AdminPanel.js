import React, { useEffect, useRef, useState, useContext } from "react";
import MyContext from "../store/MyContext";
const AdminPanel = () => {
  const [books, setBooks] = useState([]);
  const [bookLoading, setBookLoading] = useState(false);
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [displayPutForm, setDisplayPutForm] = useState(false);
  const [postResponse, setPostResponse] = useState();
  const [putResponse, setPutResponse] = useState();
  const [deleteResponse, setDeleteResponse] = useState();
  const bookName = useRef();
  const bookAuthor = useRef();
  const bookCategory = useRef();
  const updateBookId = useRef();
  const updateBookName = useRef();
  const updateBookAuthor = useRef();
  const updateBookCategory = useRef();
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
  }, [postResponse, putResponse, deleteResponse]);
  const onGetHandler = (e) => {
    setBookLoading(true);
    fetch("http://127.0.0.1:8000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((err) => console.log(err));
    setBookLoading(false);
  };

  const onPostHandler = (e) => {
    setDisplayAddForm((prev) => !prev);
  };
  const onPostDataHandler = (e) => {
    fetch("http://127.0.0.1:8000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BookName: bookName.current.value,
        BookCategory: bookCategory.current.value,
        BookAuthor: bookAuthor.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => setPostResponse(data))
      .catch((err) => setPostResponse(err));
    bookName.current.value = "";
    bookCategory.current.value = "";
    bookAuthor.current.value = "";
    setDisplayAddForm(false);
    setTimeout(() => {
      setPostResponse(false);
    }, 1000);
  };
  const onUpdateHandler = (e) => {
    setDisplayPutForm((prev) => !prev);
  };
  const onDeleteHandler = (e, id) => {
    fetch(`http://127.0.0.1:8000/books/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => setDeleteResponse(data))
      .catch((err) => setDeleteResponse(err));
    const newList = books.filter((book) => book.id !== id);
    setBooks(newList);
    setTimeout(() => {
      setDeleteResponse(false);
    }, 1000);
  };

  const onPutDataHandler = (e) => {
    fetch(`http://127.0.0.1:8000/books/${updateBookId.current.value}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BookId: updateBookId.current.value,
        BookName: updateBookName.current.value,
        BookAuthor: updateBookName.current.value,
        BookCategory: updateBookName.current.value,
      }),
    })
      .then((response) => response.json())
      .then((data) => setPutResponse(data))
      .catch((err) => setPutResponse(err));
    updateBookId.current.value = "";
    updateBookName.current.value = "";
    updateBookCategory.current.value = "";
    updateBookAuthor.current.value = "";
    setDisplayPutForm(false);
    setTimeout(() => {
      setPutResponse(false);
    }, 1000);
    setDisplayPutForm(false);
  };

  return (
    <>
      <h1>Welcome to the Admin Panel</h1>
      <div className="controls">
        <button onClick={(e) => onGetHandler(e)}>Get</button>
        {bookLoading && <h1>The Books are Loading</h1>}
        {books && (
          <ul>
            {books.map((book) => (
              <li key={book.BookId}>
                {book.BookId} {book.BookName} {book.BookCategory}{" "}
                {book.BookAuthor}{" "}
                <span>
                  <button onClick={(e) => onDeleteHandler(e, book.BookId)}>
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        )}
        <button onClick={(e) => onPostHandler(e)}>Post New Book</button>
        {displayAddForm && (
          <form onSubmit={(e) => onPostDataHandler(e)}>
            <label htmlFor="bookname">Book Name</label>
            <input type="text" id="bookname" ref={bookName} />
            <label htmlFor="bookauthor">Book Author</label>
            <input type="text" id="bookauthor" ref={bookAuthor} />
            <label htmlFor="bookcategory">Book Category</label>
            <input type="text" id="bookcategory" ref={bookCategory} />
            <button>Submmit New Book</button>
          </form>
        )}
        <button onClick={(e) => onUpdateHandler(e)}>Update Book Data</button>
        {displayPutForm && (
          <form onSubmit={(e) => onPutDataHandler(e)}>
            <label htmlFor="updatebookid">Book Id</label>
            <input type="text" id="updatebookid" ref={updateBookId} />
            <label htmlFor="updatebookname">Book Name</label>
            <input type="text" id="updatebookname" ref={updateBookName} />
            <label htmlFor="updatebookauthor">Book Author</label>
            <input type="text" id="updatebookauthor" ref={updateBookAuthor} />
            <label htmlFor="updatebookcategory">Book Category</label>
            <input
              type="text"
              id="updatebookcategory"
              ref={updateBookCategory}
            />
            <button>Update Book</button>
          </form>
        )}
      </div>
      <div className="outputs">
        {postResponse && <h1>{postResponse}</h1>}
        {putResponse && <h1>{putResponse}</h1>}
        {deleteResponse && <h1>{deleteResponse}</h1>}
      </div>
    </>
  );
};

export default AdminPanel;
