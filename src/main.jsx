import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

// routes
import App from "./App.jsx";
import ErrorPage from "./error-page";
import Contact from "./routes/Contact";
import Services from "./components/Services";
import Nature from "./components/Nature";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },

  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "services",
    element: <Nature />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
