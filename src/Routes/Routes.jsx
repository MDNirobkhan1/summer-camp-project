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
import Dashboard from "../Layout/Dashboard";
import SelectClass from "../pages/Dashboard/SelectClass/SelectClass";
import EnrollClass from "../pages/Dashboard/EnrollClass/EnrollClass";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClasses from "../pages/Dashboard/MyClasses/MyClasses";
import ManageClass from "../pages/Dashboard/ManageClass/ManageClass";
import ManageUser from "../pages/Dashboard/ManageUser/ManageUser";
import Payment from "../pages/Dashboard/Payment/Payment";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'classes',
        element: <ClassesPage></ClassesPage>
      },
      {
        path: 'instructor',
        element: <InstructorPage></InstructorPage>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'selectclass',
        element: <SelectClass></SelectClass>
      },
      {
        path: 'enrollclass',
        element: <EnrollClass></EnrollClass>
      },
      {
        path: 'addclass',
        element: <AddClass></AddClass>
      },
      {
        path: 'myclass',
        element: <MyClasses></MyClasses>
      },
      {
        path: 'manageclass',
        element: <ManageClass></ManageClass>
      },
      {
        path: 'manageuser',
        element: <ManageUser></ManageUser>
      },
      {
        path:'payment',
        element:<Payment></Payment>
      }
    ]


  }
]);