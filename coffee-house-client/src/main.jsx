import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./components/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import OurProducts from "./pages/OurProducts.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import ViewCoffee from "./components/ViewCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import AuthProvider from "./auth/AuthProvider.jsx";
import LogIn from "./pages/LogIn.jsx";
import Register from "./pages/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/",
        Component: Home,
        children: [
          {
            path: "admin",
            Component: AdminLayout,
            children: [
              {
                path: "all-coffee",
              },
            ],
          },
        ],
      },
      {
        path: "admin/add-coffee",
        Component: AddCoffee,
      },
      {
        path: "login",
        Component: LogIn,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "admin/update-coffee/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:3000/admin/coffees/${params.id}`
          );
          return res.json();
        },
        Component: UpdateCoffee,
        hydrateFallbackElement: <h1>Loading....</h1>,
      },
      {
        path: "admin/coffees/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:3000/admin/coffees/${params.id}`
          );
          return res.json();
        },
        Component: ViewCoffee,
        hydrateFallbackElement: <h1>Loading....</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
