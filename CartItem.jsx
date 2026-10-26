import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";
import Navbar from "./Navbar";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity - 1,
      })
    );
  };

  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    window.alert("Checkout Coming Soon!");
  };

  return (
    <>
      <Navbar />

      <main className="cart-page">
        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <h2>Your cart is empty</h2>
            <p>
              Discover our beautiful plants and find
              something you love.
            </p>

            <Link to="/plants" className="primary-btn">
              Continue Shopping
            </Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-section">
              <h2>Your Items ({totalItems})</h2>

              {cartItems.map((item) => (
                <article
                  className="cart-item-card"
                  key={item.id}
                >
                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-details">
                    <h3>{item.name}</h3>

                    <p>
                      Unit Price: ₹{item.price}
                    </p>

                    <div className="quantity-controls">
                      <button
                        type="button"
                        onClick={() => handleDecrement(item)}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        type="button"
                        onClick={() => handleIncrement(item)}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>

                    <p className="item-subtotal">
                      Subtotal: ₹
                      {item.price * item.quantity}
                    </p>

                    <button
                      type="button"
                      className="delete-btn"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </article>
              ))}
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <p>
                Total Items: <strong>{totalItems}</strong>
              </p>

              <p>
                Total Amount:{" "}
                <strong>₹{totalAmount}</strong>
              </p>

              <button
                type="button"
                className="primary-btn checkout-btn"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <Link
                to="/plants"
                className="continue-shopping-btn"
              >
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </>
  );
}

export default CartItem;
