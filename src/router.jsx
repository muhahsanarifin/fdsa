import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Example from "./pages/example";
import Title from "./components/title";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Title onTitle={"Home"}>
        <Home />
      </Title>
    ),
  },
  {
    path: "example",
    element: (
      <Title onTitle={"Example"}>
        <Example />
      </Title>
    ),
  },
]);

export default router;
