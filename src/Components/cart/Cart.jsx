import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const [cartItems, setCartItems] = useState({
    1: 0, // Cheese Burger
    2: 0, // Veg Cheese Burger
    3: 0, // Cheese Burger with French Fries
  });

  const increment = (itemId) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [itemId]: prevItems[itemId] + 1,
    }));
  };

  const decrement = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prevItems) => ({
        ...prevItems,
        [itemId]: prevItems[itemId] - 1,
      }));
    }
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          title={"Cheese Burger"}
          img={burger1}
          value={cartItems[1]}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItem
          title={"Veg Cheese Burger"}
          img={burger2}
          value={cartItems[2]}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          title={"Cheese Burger with French Fries"}
          img={burger3}
          value={cartItems[3]}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{calculateSubTotal(cartItems)}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{calculateTax(cartItems)}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹{calculateTotal(cartItems)}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

const calculateSubTotal = (cartItems) => {
  const itemPrices = {
    1: 200, // Cheese Burger price
    2: 250, // Veg Cheese Burger price
    3: 300, // Cheese Burger with French Fries price
  };

  let subtotal = 0;
  for (const itemId in cartItems) {
    subtotal += cartItems[itemId] * itemPrices[itemId];
  }
  return subtotal;
};

const calculateTax = (cartItems) => {
  return calculateSubTotal(cartItems) * 0.18;
};

const calculateTotal = (cartItems) => {
  return calculateSubTotal(cartItems) + calculateTax(cartItems) + 200; // Shipping charges
};

export default Cart;
