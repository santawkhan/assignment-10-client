/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Login from "../pages/login/Login";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import ChefDetails from "../ChefDetails";
import Registration from "../pages/Registration";
import PrivateRoute from "./PrivateRoute";
import Error from "../Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>

            },
            {
                path: '/registration',
                element: <Registration></Registration>

            },

            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/chefDetails/:id',
                element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,


            }

        ]
    },
])


export default router