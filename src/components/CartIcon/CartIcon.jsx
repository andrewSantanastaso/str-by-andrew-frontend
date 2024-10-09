import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Badge } from "react-bootstrap";
import * as authService from "../../services/authService";
const CartIcon = (props) => {
  let cartLength = props.cart.length;
  let user = authService.getUser();

  return (
    <>
      <Link to={`/cart/${user._id._id}`} style={{ color: "black" }}>
        <BsCart2 style={{ width: "2rem", height: "2rem" }} />
        {cartLength > 0 ? <Badge>{cartLength}</Badge> : <></>}
      </Link>
    </>
  );
};

export default CartIcon;
