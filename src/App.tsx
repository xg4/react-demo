import * as React from "react";
import { Link } from "react-router-dom";
import Router from "./router";

export default class App extends React.Component {
  public render() {
    return (
      <Router>
        <nav>
          <Link to="/">主页</Link>

          <Link to="/about">关于</Link>
        </nav>
      </Router>
    );
  }
}
