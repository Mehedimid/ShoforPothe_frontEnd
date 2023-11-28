import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/login $ register/Register";
import Login from "../pages/login $ register/Login";
import AllPackages from "../pages/all packages/AllPackages";
import AllStories from "../pages/all strories/AllStories";
import AllGuides from "../pages/all guides/AllGuides";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/all-packages',
        element:<AllPackages></AllPackages>
      },
      {
      
       path:'/all-stories',
       element:<AllStories></AllStories>
      
      },
      {
        path:'/all-guides',
        element:<AllGuides></AllGuides>
      },
    ],
  },
]);

export default router;
