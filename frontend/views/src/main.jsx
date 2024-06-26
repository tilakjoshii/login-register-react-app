import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/login'
import Register from './components/register'
import Error from './components/404'
import HomePage from './components/homePage'
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "homePage",
        element:<HomePage/>
      },
      {
        path: "login",
        element:<Login/>
      },
      {
        path: "register",
        element:<Register/>
      },
      {
        path: "*",
        element:<Error/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

  