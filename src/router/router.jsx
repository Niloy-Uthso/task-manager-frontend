import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import AuthLayout from "../layouts/AuthLayout";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";
import path from "node:path";
import AddTask from "../pages/dashboard/AddTask";
import AllTasks from "../pages/dashboard/AllTasks";
import UpdateTask from "../pages/dashboard/UpdateTask";
import Login from "../pages/auth/Login";
import About from "../pages/About";
import Blog from "../pages/Blog";
import BlogPost from "../pages/BlogPost";


export const router = createBrowserRouter([

{
    path:"/",
    Component:RootLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"dashboard",
        Component:DashboardLayout,
        children:[
            {
                path:"add-task",
                Component:AddTask
            },
            {
                path:"all-tasks",
                Component:AllTasks
            },
            {
                path:"update-task/:id",
                Component:UpdateTask
            }
        ]
      },
      {
        path:"/about",
        Component:About
      },
       {
        path:"/blogs",
        Component:Blog
      },
      {
  path: "blog/:id",
  Component: BlogPost,
      }
    ]
 },
  {

    path: "/",
    Component: AuthLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: SignUp
      }
    ]

  },
])