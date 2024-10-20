import React from "react"; // Include this line for older React versions
import "./App.css";
import Home from "./Pages/Home.jsx";
import Forms from "./Pages/Form.jsx";
import Nopage from "./Pages/Nopage.jsx";
import Electrician from "./Pages/Electrician.jsx";
// import Plumber from "./Pages/Plumber.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// Define your routes 
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form",
    element: <Forms />,
  },
  {
    path: "/electrician",
    element: <Electrician />,
  },
  // {
  //   path: "/plumber",
  //   element: <Plumber />,
  // },

  {
    path: "*",
    element: <Nopage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
