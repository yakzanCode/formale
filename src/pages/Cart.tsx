import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import type { CartItem } from "../contexts/CartContext"; // if you export it
import { Link } from "react-router-dom";
import { urlFor } from "../lib/sanity";

const CartPage: React.FC = () => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);

  if (!cartItems.length) {
    return (
      <div className="container p-4">
        <h3>Your Cart is Empty</h3>
        <Link to="/collections/all" className="btn btn-primary mt-3">Shop Now</Link>
      </div>
    );
  }

  const increaseQty = (item: CartItem) => {
    addToCart(item, 1);
  };

  const decreaseQty = (item: CartItem) => {
    if (item.quantity > 1) {
      addToCart(item, -1);
    } else {
      removeFromCart?.(item._id);
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container p-4">
      <h2 className="text-center my-4">Your Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, index) => (
            <tr key={item._id ?? index}>
              <td>
                {item.images?.[0] && (
                  <img
                    src={urlFor(item.images[0]).width(100).height(100).url()}
                    alt={item.name}
                    className="bg-dark"
                    style={{ width: 80, height: 80, objectFit: "cover", marginRight: 10 }}
                  />
                )}
                <span>{item.name}</span>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <div>
                  <span onClick={() => decreaseQty(item)}>-</span>
                  <span className="mx-2">{item.quantity}</span>
                  <span onClick={() => increaseQty(item)}>+</span>
                </div>
              </td>
              <td>${(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <i className="bi bi-x" onClick={() => removeFromCart?.(item._id)}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex mt-4 mb-2">
        <h4 className="ms-auto me-2">Total: ${totalPrice.toFixed(2)}</h4>
        <i className="bi bi-x-lg" onClick={() => clearCart?.()}></i>
      </div>
      <button className="btn btn-dark w-100 my-2">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartPage;
