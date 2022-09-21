import "./App.css";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Login";
import Login from "./pages/Registration";
import { Route, Switch } from "react-router-dom";
import Error from "./pages/Error";
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
        <Route path="*" exact>
          <Error />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
