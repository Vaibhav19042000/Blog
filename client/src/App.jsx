import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Project from "./pages/Project.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import Layout from "./Layout.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import PostPage from "./pages/PostPage.jsx";
import UpdatePost from "./pages/UpdatePost.jsx";
import Search from "./pages/Search.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "dashboard",
        element: <PrivateRoute />,
        children: [
          {
            path: "",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "create-post",
        element: <OnlyAdminPrivateRoute />,
        children: [
          {
            path: "",
            element: <CreatePost />,
          },
        ],
      },
      {
        path: "projects",
        element: <Project />,
      },
      {
        path: "post/:postSlug",
        element: <PostPage />,
      },
      {
        path: "update-post/:postId",
        element: <UpdatePost />,
      },
      {
        path: "signIn",
        element: <SignIn />,
      },
      {
        path: "signUp",
        element: <SignUp />,
      },
      {
        path: "search",
        element: <Search />, // Add the Search route
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router}>
    
    </RouterProvider>
  );
};

export default App;
