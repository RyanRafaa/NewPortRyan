import { createBrowserRouter } from "react-router-dom";
import { ROOT_PATH } from "../constants/route.constant";
import { Home } from "../screens";

export const routesList = createBrowserRouter([
  {
    path: ROOT_PATH,
    element: <Home />,
  },
]);
