import { createBrowserRouter } from "react-router-dom";
import { ROOT_PATH } from "../constants/route.constant";
import { Home } from "../screens";
import { SpaceGame } from "../screens/game/Aoba";



export const routesList = createBrowserRouter([
  {
    path: ROOT_PATH,
    element: <Home />,
  },
  {
    path: "/game",
    element: <SpaceGame />,
  }
]);
