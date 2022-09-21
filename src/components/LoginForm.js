import React, { useState, memo, useEffect } from "react";
import "./style.css";
const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submit, setSubmit] = useState(false);
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(email, password);
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
    </div>
  );
};
export default memo(LoginForm);
