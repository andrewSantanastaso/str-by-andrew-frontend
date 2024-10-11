import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useEffect } from "react";
import * as authService from "../../services/authService";
import * as cartService from "../../services/cartService";
const CartIcon = (props) => {
  const getTotal = () => {
    let cartItems = props.cart.products?.map((item) => {
      return parseInt(item.quantity);
    });

    let total = 0;
    let totalItems = cartItems?.reduce((acc, curr) => acc + curr, total);
    return totalItems;
  };

  let user = authService.getUser();

  return (
    <>
      <Link to={`/cart/${user._id._id}`} style={{ color: "black" }}>
        <BsCart2 style={{ width: "2rem", height: "2rem" }} />
        {getTotal() > 0 ? <Badge>{getTotal()}</Badge> : <></>}
      </Link>
    </>
  );
};

export default CartIcon;
