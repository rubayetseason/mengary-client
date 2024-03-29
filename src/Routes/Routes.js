import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import AllProducts from "../Pages/Main/AllProducts/AllProducts";
import Cart from "../Pages/Main/Cart/Cart";
import Categories from "../Pages/Main/Categories/Categories";
import CategoryById from "../Pages/Main/Categories/CategoryById";
import Home from "../Pages/Main/Home/Home";
import Payment from "../Pages/Main/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/allproducts/:item",
        element: <CategoryById></CategoryById>,
        loader: ({ params }) =>
          fetch(`https://mengary-server.vercel.app/products/${params.item}`),
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
