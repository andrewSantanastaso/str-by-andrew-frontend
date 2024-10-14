import * as cartService from "../../services/cartService";
import * as authService from "../../services/authService";
import { useState, useEffect } from "react";
import CartList from "../CartList/CartList";
import { useParams } from "react-router-dom";

const Cart = (props) => {
  const { userId } = useParams();
  const [userCart, setUserCart] = useState([]);
  const user = authService.getUser();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartData = await cartService.loadCart(user._id._id);

        setUserCart(cartData);
        props.setCart(cartData);
      } catch (error) {
        console.log({ error: error.message });
      }
    };

    fetchCartItems();
  }, []);

  return (
    <>
      <CartList
        cart={userCart.products}
        userId={userId}
        setUserCart={setUserCart}
      />
    </>
  );
};

export default Cart;
