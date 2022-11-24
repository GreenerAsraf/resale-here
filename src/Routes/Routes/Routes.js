import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");
const { default: Home } = require("../../Pages/Home/Home/Home");




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
            }
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