import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Posts from "./pages/Posts";
import Create from "./layouts/Create";
import { loader as PostLoder } from "./pages/Posts";
import Details from "./pages/Details";
import { loader as DetailLoader } from "./pages/Details";

const App = () => {
  const router = createBrowserRouter([
  { 
    path: "/", 
    element: <Main />,
    children:[
    {
      index:true,
      element : <Posts />,
      loader : PostLoder
    },
    {
      path:"/create-post",
      element : <Create />
    },
    {
      path:"/post-details/:id",
      element: <Details />,
      loader : DetailLoader 
    }
  ]

  }]);
  return (
    <RouterProvider router={router}/>
  );
};

export default App;
