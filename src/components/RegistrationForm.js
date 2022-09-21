import React, { useState } from "react";
import "./style.css";
function RegistrationForm() {
  const [name, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setFirstName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
    if (id === "admin") {
      setIsAdmin(!isAdmin);
    }
  };

  const handleSubmit = () => {
    console.log(name, email, password, isAdmin);
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="firstName">
            First Name{" "}
          </label>
          <input
            className="form__input"
            type="text"
            value={name}
            onChange={(e) => handleInputChange(e)}
            id="name"
            placeholder="Name"
          />
        </div>
        <div className="email">
          <label className="form__label" htmlFor="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            value={email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Email"
          />
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            value={password}
            onChange={(e) => handleInputChange(e)}
            placeholder="Password"
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleInputChange(e)}
            placeholder="Confirm Password"
          />
        </div>
        <div className="admin">
          <label className="form__label" htmlFor="email">
            IsAdmin{" "}
          </label>
          <input
            type="checkbox"
            id="admin"
            className="form__input"
            value={isAdmin}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div className="footer">
        <button onClick={() => handleSubmit()} type="submit" className="btn">
          Register
        </button>
      </div>
    </div>
  );
}

export default RegistrationForm;
