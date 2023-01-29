import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllProducts from "../Pages/Main/AllProducts/AllProducts";
import Cart from "../Pages/Main/Cart/Cart";
import Categories from "../Pages/Main/Categories/Categories";
import CategoryById from "../Pages/Main/Categories/CategoryById";
import Home from "../Pages/Main/Home/Home";
import { productAndCartData } from "../Utils/getCartAndProductData";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: productAndCartData,
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
                path: '/cart',
                element: <Cart></Cart>
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