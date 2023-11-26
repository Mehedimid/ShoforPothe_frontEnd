import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/login $ register/Register";
import Login from "../pages/login $ register/Login";

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
      }
    ],
  },
]);

export default router;
