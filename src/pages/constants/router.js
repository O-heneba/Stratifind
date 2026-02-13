/* eslint-disable no-unused-vars */
// router.jsx
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../RootLayout";
import HomePage from "../HomePage";
import Login from './../Login';
import Signup from "../Signup";
import ErrorElement from "../ErrorElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorElement/>,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    //   {
    //     path:"dashboard",
    //     element:<Dashboard/>
    //   },
    //   {
    //     path:"job-details",
    //     element:<JobDetails/>
    //   },
    //   {
    //     path:"application",
    //     element:<Applications/>
    //   },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"signup",
        element:<Signup/>
      }
      
      
    ],
  },
]);

export default router;