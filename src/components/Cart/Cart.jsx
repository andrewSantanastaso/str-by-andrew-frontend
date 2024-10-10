import * as cartService from "../../services/cartService";
import * as authService from "../../services/authService";
import { useState, useEffect } from "react";

const Cart = (props) => {
  const [userCart, setUserCart] = useState([]);
  useEffect(() => {
    const fetchCartItems = async () => {
      let user = await authService.getUser();

      try {
        const cartData = await cartService.loadCart(user._id._id);

        setUserCart(cartData);
      } catch (error) {
        console.log({ error: error.message });
      }
    };

    fetchCartItems();
  }, []);

  return (
    <>
      <ul>
        {userCart.products?.map((cartItem) => (
          <li key={cartItem._id}>{cartItem.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
