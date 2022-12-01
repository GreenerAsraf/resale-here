import DashboardLayout from "../../Layout/DashboardLayout";
import Blog from "../../Pages/Blog/Blog";
import AddProduct from "../../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import ManageSellers from "../../Pages/Dashboard/ManageSellers/ManageSellers";
import ProductCategories from "../../Pages/Home/ProductCategories/ProductCategories";
import Laptops from "../../Pages/Laptops/Laptops";
import Login from "../../Pages/Login/Login";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import ErrorPage from "../../Pages/Shared/ErrorPage";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute";

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
                path: '/products',
                loader: async ()=>{
                    return fetch(' https://resale-here-server.vercel.app/products');
                } ,
               
                element: <MyProducts></MyProducts>
            },
            {
                path: '/categories',
                loader: async ()=>{
                    return fetch('https://resale-here-server.vercel.app/laptops');
                } ,
                element: <ProductCategories></ProductCategories>
            },
            {
                path: '/category/:id',
                element: <Laptops></Laptops>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allusers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/addProducts',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/managesellers',
                element: <AdminRoute><ManageSellers></ManageSellers></AdminRoute>
            },
        ]
    }
])





