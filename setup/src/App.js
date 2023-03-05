import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Root from "./pages/Root";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "cocktail/:fragment", element: <SingleCocktail /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
