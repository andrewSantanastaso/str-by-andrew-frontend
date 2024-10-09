import * as cartService from "../../services/cartService";
import * as authService from "../../services/authService";
import { useState, useEffect } from "react";

const Cart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      let user = await authService.getUser();

      try {
        const cartData = await cartService.loadCart(user._id._id);

        setCart(cartData);
      } catch (error) {
        console.log({ error: error.message });
      }
    };

    fetchCartItems();
  }, []);

  return (
    <>
      <ul>
        {cart.products?.map((cartItem, index) => {
          <li key={index}>{cartItem.name}</li>;
        })}
      </ul>
    </>
  );
};

export default Cart;
