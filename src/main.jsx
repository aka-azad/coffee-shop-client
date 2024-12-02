import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import AddCoffee from "./Components/AddCoffee.jsx";
import UpdateCoffee from "./Components/UpdateCoffee.jsx";
import Signin from "./Components/Signin.jsx";
import Signup from "./Components/Signup.jsx";
import Home from "./Components/Home.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Users from "./Components/Users.jsx";
import User from "./Components/User.jsx";
import EditUserInfo from "./Components/EditUserInfo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://coffee-store-server-iota-one.vercel.app/coffee"),
      },
      { path: "addCoffee", element: <AddCoffee /> },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-iota-one.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () =>
          fetch("https://coffee-store-server-iota-one.vercel.app/users"),
      },
      {
        path: "user/:id",
        element: <User />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-iota-one.vercel.app/user/${params.id}`
          ),
      },
      {
        path: "user/edit/:id",
        element: <EditUserInfo />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-iota-one.vercel.app/user/${params.id}`
          ),
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
