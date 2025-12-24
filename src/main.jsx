import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainRoot from "./components/MainRoot/MainRoot.jsx";
import Shop from "./components/Shop/Shop.jsx";
import Details from "./components/Details/Details.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainRoot,
    children: [
      { index: true, Component: App },
      { path: 'shop', Component: Shop },
      { path: 'product/details', Component: Details },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
