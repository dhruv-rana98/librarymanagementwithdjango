import React, { useState, memo, useEffect } from "react";
import "./style.css";
import { useHistory } from "react-router-dom";
const LoginForm = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const [users, setUsers] = useState([]);
  const [response, setResponse] = useState(false);
  const [error, setError] = useState(null);
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    fetch("http://127.0.0.1:8000/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => setError(err));
  }, []);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
    console.log(users);

    const fetchedList = users.filter((user) => {
      return user.AdminEmail === email && user.AdminPassword === password;
    });
    if (fetchedList.length === 1 && fetchedList.isAdmin === 1) {
      history.push("/admin");
    } else if (fetchedList.length === 1 && fetchedList.isAdmin === 0) {
      history.push("/student");
    } else {
      setResponse(false);
      setError("Duplicate records found, please contact with admin to update");
    }
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (email.trim().length > 0 || password.trim().length > 0) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [email, password]);
  return (
    <div>
      <form className="LoginForm" onSubmit={(e) => onSubmitHandler(e)}>
        <div className="">
          <label htmlFor="email">Enter Email</label>
          <input
            className="form__input"
            type="email"
            value={email}
            id="loginid"
            placeholder="abc@gmail.com"
            onChange={(e) => emailChangeHandler(e)}
          />
        </div>
        <div className="">
          <label htmlFor="password">Enter Password</label>
          <input
            className="form__input"
            type="password"
            value={password}
            id="loginemail"
            placeholder="please enter your password"
            onChange={(e) => passwordChangeHandler(e)}
          />
        </div>
        <div>
          <button disabled={!submit}>Submit</button>
        </div>
      </form>
      <div className="output">
        {response && <p>Sending to the library page, please wait.</p>}
        {error && <p>error</p>}
      </div>
    </div>
  );
};
export default memo(LoginForm);
