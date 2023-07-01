import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
} from "react-router-dom";
import Home from "./pages/home";
import Example from "./pages/example";

// Components
import Title from "./components/Title";
import Motion from "./components/Motion";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <Title onTitle={"Home"}>
            <Motion>
              <Home />
            </Motion>
          </Title>
        }
      />
      <Route
        path="examples"
        element={
          <Title onTitle={"Example"}>
            <Motion>
              <Example />
            </Motion>
          </Title>
        }
      />
    </Route>
  )
);

export default router;
