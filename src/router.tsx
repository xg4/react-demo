// import createBrowserHistory from "history/createBrowserHistory";
import * as React from "react";
import { BrowserRouter, HashRouter, Route } from "react-router-dom";

import About from "./views/About";
import Home from "./views/Home";

interface IRouteItem {
  path: string;
  exact?: boolean;
  component: any;
  children?: IRouteItem[];
}

type RouterType = typeof BrowserRouter | typeof HashRouter;

const Router: RouterType =
  process.env.NODE_ENV !== "production" ? BrowserRouter : HashRouter;

// const history = createBrowserHistory();

const routes: IRouteItem[] = [
  {
    component: Home,
    exact: true,
    path: "/"
  },
  {
    component: About,
    path: "/about"
  }
];

export default class AppRouter extends React.Component<any, any> {
  public render() {
    const { children } = this.props;
    return (
      <Router>
        <div>
          {children}
          {routes.map((route: IRouteItem, index: number) => (
            <Route
              key={`route${index}`}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </div>
      </Router>
    );
  }
}
