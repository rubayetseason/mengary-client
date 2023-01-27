import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllProducts from "../Pages/Main/AllProducts/AllProducts";
import Categories from "../Pages/Main/Categories/Categories";
import Home from "../Pages/Main/Home/Home";

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
                path: '/allproducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
        ]
    }
]);