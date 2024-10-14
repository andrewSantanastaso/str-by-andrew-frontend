import { Table, Button } from "react-bootstrap";
import { useEffect } from "react";
import * as cartService from "../../services/cartService";
import * as authService from "../../services/authService";

const CartList = ({ cart, setUserCart }) => {
  const user = authService.getUser();

  const getTotal = () => {
    let getPrices = cart?.map((item) => {
      return parseInt(item.product.price * item.quantity);
    });
    let total = 0;
    let cost = getPrices?.reduce((acc, curr) => acc + curr, total);
    return cost?.toFixed(2);
  };
  const handleDelete = async (productId) => {
    try {
      console.log(user._id._id);
      console.log(productId);
      let updatedCart = await cartService.removeFromCart(
        user._id._id,
        productId
      );
      setUserCart(updatedCart);
    } catch (error) {
      console.error(error);
    }
  };

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
      <Table
        responsive
        striped
        bordered
        variant="dark"
        className=" justify-center"
      >
        <thead>
          <tr className="text-center">
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((item, index) => (
            <tr key={index}>
              <td>{item.product.name}</td>
              <td>{(item.product.price * item.quantity).toFixed(2)}</td>
              <td>{item.quantity}</td>
              <td className="text-center">
                <Button
                  variant="danger"
                  id={item._id}
                  onClick={() => handleDelete(item.product._id)}
                >
                  Delete From Cart
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>
              Total: {getTotal()}
              {}
            </td>
            <td colSpan={2} className="text-center">
              <Button className="d-inline-block">Purchase</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default CartList;
