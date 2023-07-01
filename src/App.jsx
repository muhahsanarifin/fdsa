import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Example from "./pages/example";

// Components
import Title from "./components/Title";
import Motion from "./components/Motion";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
