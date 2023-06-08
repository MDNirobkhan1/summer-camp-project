import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import ClassesPage from "../pages/classesPage/classesPage";
import InstructorPage from "../pages/InstructorPage/InstructorPage";
import ErrorPage from "../pages/Home/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path:'classes',
          element:<ClassesPage></ClassesPage>
        },
        {
          path:'instructor',
          element:<InstructorPage></InstructorPage>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signup',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);