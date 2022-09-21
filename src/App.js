import "./App.css";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import BookList from "./pages/BookList";
import { Route, Switch } from "react-router-dom";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
function App() {
  return (
    <div className="App">
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
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
