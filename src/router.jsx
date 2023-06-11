import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Example from "./pages/example";

// Components
import Title from "./components/title";
import Motion from "./components/Motion";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Title onTitle={"Home"}>
        <Motion>
          <Home />
        </Motion>
      </Title>
    ),
  },
  {
    path: "example",
    element: (
      <Title onTitle={"Example"}>
        <Motion>
          <Example />
        </Motion>
      </Title>
    ),
  },
]);

export default router;
