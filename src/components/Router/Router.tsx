import { Route, Routes } from "react-router-dom";
import { routes, type RouteItems } from "./RouterConfig";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  return <Routes>{getRoutesComponent(routes)}</Routes>;
};

function getRoutesComponent(routeItem: RouteItems[]) {
  return routeItem.map((routeItem) => {
    let Component = <routeItem.element />;
    if (routeItem.isAuth) {
      Component = (
        <PrivateRouter>
          <routeItem.element />
        </PrivateRouter>
      );
    }
    if (routeItem.children) {
      return (
        <Route path={routeItem.path} element={Component}>
          {getRoutesComponent(routeItem.children)}
        </Route>
      );
    }
    return <Route path={routeItem.path} element={Component} />;
  });
}

export default Router;
