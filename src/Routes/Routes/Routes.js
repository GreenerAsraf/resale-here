import Blog from "../../Pages/Blog/Blog";
import Laptops from "../../Pages/Laptops/Laptops";
import Login from "../../Pages/Login/Login";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <Laptops></Laptops>
            },
        ]
    }
])







// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Main></Main>, 
//         errorElement: <DisplayError></DisplayError>,
//         children: [
//             {
//                 path: '/',
//                 element: <Home></Home>
//             },
//             {
//                 path: '/login',
//                 element: <Login></Login>
//             },
//             {
//                 path: '/signup',
//                 element: <SignUp></SignUp>
//             },
//             {
//                 path: '/appointment',
//                 element: <Appointment></Appointment>
//             }
//         ]
//     },