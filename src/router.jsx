import {
  // BrowserRouter,
  // Routes,
  // Route,
  createBrowserRouter,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Example from "./pages/Example";

// Components
import Title from "./components/Title";
import Motion from "./components/Motion";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Title onTitle={"Home"}>
//               <Motion>
//                 <Home />
//               </Motion>
//             </Title>
//           }
//         />
//         <Route
//           path="examples"
//           element={
//             <Title onTitle={"Example"}>
//               <Motion>
//                 <Example />
//               </Motion>
//             </Title>
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

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
