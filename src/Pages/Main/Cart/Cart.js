import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  console.log(products);

  let total = 0;

  for (const product of products) {
    total = total + product.price * product.quantity;
  }

  localStorage.setItem("total", total);

  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 text-gray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 ">
        <h2 className="text-xl font-semibold">
          {products.length ? "Review Cart Items" : "Cart is EMPTY!"}
        </h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          {products.map((product) => (
            <CartItem key={product._id} product={product} />
          ))}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount: <span className="font-semibold">{total} $</span>
          </p>
          <p className="text-sm text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <Link to="/allproducts">
            <button
              type="button"
              className="px-6 py-2 border-2 rounded-full border-black"
            >
              Back To Shop
            </button>
          </Link>
          <Link to="/payment">
            <button
              type="button"
              className="px-6 py-3 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800"
            >
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
