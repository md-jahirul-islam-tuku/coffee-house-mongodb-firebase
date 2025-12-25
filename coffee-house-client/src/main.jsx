import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import OurProducts from "./pages/OurProducts.jsx";
import AddCoffee from "./components/AddCoffee.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: App,
      },
    ],
  },
  {
    path: "/admin",
    Component: AdminLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: OurProducts,
      },
      {
        path: "add-coffee",
        Component: AddCoffee,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
