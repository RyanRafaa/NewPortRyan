import { RouterProvider } from "react-router-dom";
import { Container } from "../components/Container";
import { routesList } from "./list.routes";

export const AppRoutes = (): JSX.Element => {
  return (
    <Container>
      <RouterProvider router={routesList} />
    </Container>
  );
};
