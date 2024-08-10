import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import ErrorPage from "../pages/ErrorPage";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";
import MyBids from "../pages/MyBids";
import BidRequests from "../pages/BidRequests";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element: <Home/>,
          // loader: ()=>fetch('http://localhost:5000/jobs')
          // // loader: ()=>fetch('http://localhost:5000/jobs')
          // loader:()=>fetch(`${import.meta.env.VITE_APP_URL}/jobs`)
        },
        {
          path:"/login",
          element: <Login/>,

        },
        {
          path:"/register",
          element: <Register/>
        },
        {
          path:"/job/:id",
          element: <JobDetails/>,
          loader: ({params})=>fetch(`http://localhost:5000/job/${params.id}`)
        },
        {
          path: "/addjob",
          element:<PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
          path: "/mypostedjob",
          element:<MyPostedJobs></MyPostedJobs>,
          
        },
        {
          path:"/update/:id",
          element:<UpdateJob></UpdateJob>,
          loader: ({params})=>fetch(`http://localhost:5000/job/${params.id}`)
        },
        {
          path:"/mybids",
          element:<PrivateRoute> <MyBids></MyBids></PrivateRoute>,
          
        },
        {
          path:"/bidrequest",
          element:<PrivateRoute> <BidRequests></BidRequests></PrivateRoute>,
          
        }

      ]
    },
  ]);

  export default router;