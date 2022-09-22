import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import BookList from "./pages/BookList";
import { Route, Switch } from "react-router-dom";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import MyContext from "./store/MyContext";
import Header from "./components/Header";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Student from "./pages/Student";
function App() {
  const history = useHistory();
  const [loggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    history.replace("/");
  };

  return (
    <MyContext.Provider
      value={{
        isLoggedIn: loggedIn,
        login: loginHandler,
        logout: logoutHandler,
        history: history,
      }}
    >
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Registration />
          </Route>
          <Route path="/books" exact>
            <BookList />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
          <Route path="/student" exact>
            <Student />
          </Route>
          <Route path="*" exact>
            <Error />
          </Route>
        </Switch>
      </div>
    </MyContext.Provider>
  );
}

export default App;
