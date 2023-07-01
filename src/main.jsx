import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import "./index.css";
import { StoreProvider } from "easy-peasy";
import store from "./easy-peasy/store";
import { RouterProvider } from "react-router-dom";
import router from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);
