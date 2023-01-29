import { getStoredCart } from "./FakeDB";

export const productAndCartData = async () => {
  const productData = await fetch("https://mengary-server.vercel.app/products");
  const products = await productData.json();

  const savedCart = getStoredCart();
  const initialCart = [];
  for (const id in savedCart) {
    const foundProduct = products.find((product) => product._id === id);
    if (foundProduct) {
      const quantity = savedCart[id];
      foundProduct.quantity = quantity;
      initialCart.push(foundProduct);
    }
  }
  return { products, initialCart };
};
