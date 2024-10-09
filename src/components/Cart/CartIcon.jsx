import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
const CartIcon = (props) => {
  let cartLength = props.cart.length;

  return (
    <>
      <Link to="/cart" style={{ color: "black" }}>
        <BsCart2 style={{ width: "2rem", height: "2rem" }} />
        {cartLength > 0 ? <Badge>{cartLength}</Badge> : <></>}
      </Link>
    </>
  );
};

export default CartIcon;
