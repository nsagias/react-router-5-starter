import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
import Home from "../pages/Home";
import PageOne from "../pages/PageOne";
import PageThree from "../pages/PageThree";
import PageTwo from "../pages/PageTwo";

export default function Header (props) {

  return (
    <>
    <Router forceRefresh={true}>
      <nav>
        <ul>
          <li><Link to="/pageone">Page One</Link></li>
          <li><Link to="/pagetwo">Page Two</Link></li>
          <li><Link to="/pagethree/">Page Three</Link></li>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/pageone/:firstId" component={PageOne}></Route>
        <Route path="/pagetwo/:secondId/user/:subSecondId" component={PageTwo}></Route>
        <Route path="/pagethree/:thirdId" component={PageThree}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
    </>
  );
}