import {
  // BrowserRouter,
  // Routes,
  createRoutesFromElements,
  Route,
  createBrowserRouter,
} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Example from "./pages/Example";

// Components
import Title from "./components/Title";
import Motion from "./components/Motion";

// --** First way **-- 
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

// --** Second way **-- 
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route
//         path="/"
//         element={
//           <Title onTitle={"Home"}>
//             <Motion>
//               <Home />
//             </Motion>
//           </Title>
//         }
//       />
//       <Route
//         path="example"
//         element={
//           <Title onTitle={"Example"}>
//             <Motion>
//               <Example />
//             </Motion>
//           </Title>
//         }
//       />
//     </Route>
//   )
// );

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
