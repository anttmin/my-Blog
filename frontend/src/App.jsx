import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layouts/Main";
import { Post } from "./pages/Post";
import { loader as postLoader } from "./pages/Post";
import Createpage from "./pages/Createpage";
import Details from "./pages/Details";
import { loader as postdetailsLoader } from "./pages/Details";
import { action as postcreation } from "./pages/Createpage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          index: true,
          element: <Post />,
          loader: postLoader,
        },
        {
          path: "/create-post",
          element: <Createpage />,
          action : postcreation
        },
        {
          path: "/create-detail/:id",
          element: <Details />,
          loader: postdetailsLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
