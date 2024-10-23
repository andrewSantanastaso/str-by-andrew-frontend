import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useEffect } from "react";
import * as cartService from "../../services/cartService";
import * as authService from "../../services/authService";

const CartIcon = (props) => {
  let user = authService.getUser();

  const getTotal = () => {
    let cartItems = props.cart.products?.map((item) => {
      return parseInt(item.quantity);
    });

    let total = 0;
    let totalItems = cartItems?.reduce((acc, curr) => acc + curr, total);
    return totalItems;
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const cartData = await cartService.loadCart(user._id._id);

        console.log(cartData.products);
      } catch (error) {
        console.log({ error: error.message });
      }
    };

    fetchCartItems();
  }, [props.cart.products]);

  return (
    <>
      <Link to={`/cart/`} style={{ color: "black" }}>
        <BsCart2 style={{ width: "2rem", height: "2rem" }} />
        {getTotal() > 0 ? <Badge>{getTotal()}</Badge> : <></>}
      </Link>
    </>
  );
};

export default CartIcon;
