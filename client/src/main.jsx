import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
//import "./index.css";
//..import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Login from "./pages/Login";
import Main from "./pages/Main";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddInvoice from "./pages/AddInvoice";
import InvDetail from "./pages/InvDetail";
import AddDetail from "./pages/AddDetail";
import Detail from "./pages/Detail";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/main", element: <Main /> },
  { path: "/addinvoice", element: <AddInvoice /> },
  { path: "/invdetail/:id", element: <InvDetail /> },
  { path: "/detail/:qty/:id", element: <Detail /> },
  { path: "/adddetail/:id", element: <AddDetail /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
