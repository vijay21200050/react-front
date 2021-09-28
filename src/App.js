import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
    <TopBar />
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/write">
          <Write/>
        </Route>
        <Route path="/post/:postid">
          <Single/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
