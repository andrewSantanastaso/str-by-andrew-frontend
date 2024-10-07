import NewProductForm from "../NewProductForm/NewProductForm";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <>
      <h1>Admin Page</h1>

      <h3>Add Products</h3>
      <Link to="/admin/new-product-form">Add a Product</Link>
      <h3>Add Admin</h3>
    </>
  );
};

export default Admin;
