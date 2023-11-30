import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import Register from "../pages/login $ register/Register";
import Login from "../pages/login $ register/Login";
import AllPackages from "../pages/all packages/AllPackages";
import AllStories from "../pages/all strories/AllStories";
import AllGuides from "../pages/all guides/AllGuides";
import TypePackages from "../pages/type packages/TypePackages";
import PackageDetails from "../components/PackageDetails";
import Dashboard from "../Dashboard/Dashboard";
import AdminProfile from "../Dashboard/admin comp/AdminProfile";
import AddPackage from "../Dashboard/admin comp/AddPackage";
import ManageUsers from "../Dashboard/admin comp/ManageUsers";
import AdminRoute from "../private route/AdminRoute";
import UserProfile from "../Dashboard/tourist comp/UserProfile";
import UserBookings from "../Dashboard/tourist comp/UserBookings";
import Wishlist from "../Dashboard/tourist comp/Wishlist";
import GuideProfile from "../Dashboard/guide comp/GuideProfile";
import AssignedTours from "../Dashboard/guide comp/AssignedTours";
import GuideDetails from "../components/GuideDetails";
import PrivateRoute from "../private route/PrivateRoute";
import StoryDetail from "../components/story section/StoryDetail";

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
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/all-packages",
        element: <AllPackages></AllPackages>,
      },
      {
        path: "/all-stories",
        element: <AllStories></AllStories>,
      },
      {
        path:"/stories/:id", 
        element: <StoryDetail></StoryDetail>
      },
      {
        path: "/all-guides",
        element: <AllGuides></AllGuides>,
      },
      {
        path:'/guide-details/:email',
        element:<GuideDetails></GuideDetails>
      },
      {
        path: "/package-type/:type",
        element: <TypePackages></TypePackages>,
      },
      {
        path: "/packages/:id",
        element: <PackageDetails></PackageDetails>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // ======== user routes =======
      {
        path: "/dashboard/user-profile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/dashboard/user-bookings",
        element: <UserBookings></UserBookings>,
      },
      {
        path: "/dashboard/wishlist/:email",
        element: <Wishlist></Wishlist>,
      },

      // ======== guide routes =======
      {
        path: "/dashboard/guide-profile",
        element: <GuideProfile></GuideProfile>,
      },
      {
        path: "/dashboard/assigned-tours",
        element: <AssignedTours></AssignedTours>,
      },

      //====== admin routes ========
      {
        path: "/dashboard/admin-profile",
        element: (
 
            <AdminProfile></AdminProfile>
 
        ),
      },
      { 
        path: "/dashboard/add-package",
        element: (
            <AddPackage></AddPackage>
        ),
      },
      {
        path: "/dashboard/manage-users",
        element: (
            <ManageUsers></ManageUsers>
        ),
      },
    ],
  },

]);

export default router;
