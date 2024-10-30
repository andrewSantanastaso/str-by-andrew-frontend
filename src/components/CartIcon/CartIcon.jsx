import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import { useEffect, useState } from "react";
import * as cartService from "../../services/cartService";
import * as authService from "../../services/authService";

const CartIcon = (props) => {
  let user = authService.getUser();
  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      let cartItems = props.cart.products?.map((item) => {
        return item.quantity;
      });
      console.log(cartItems);
      let total = 0;
      let totalItems = cartItems?.reduce((acc, curr) => acc + curr, total);
      return totalItems;
    };
    setCartLength(getTotal());
  }, [props.cart]);

  return (
    <>
      <Link to={`/cart`} style={{ color: "black" }}>
        <BsCart2 style={{ width: "2rem", height: "2rem" }} />
        {cartLength > 0 ? <Badge>{cartLength}</Badge> : <></>}
      </Link>
    </>
  );
};

export default CartIcon;
