import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllProducts from "../Pages/Main/AllProducts/AllProducts";
import Categories from "../Pages/Main/Categories/Categories";
import CategoryById from "../Pages/Main/Categories/CategoryById";
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
            {
                path: '/allproducts/:item',
                element: <CategoryById></CategoryById>,
                loader: ({ params }) =>
                fetch(`http://localhost:5000/products/${params.item}`)
            },
        ]
    }
]);