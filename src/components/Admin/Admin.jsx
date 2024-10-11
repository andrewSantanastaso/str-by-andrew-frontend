import { Link } from "react-router-dom";

const Admin = (props) => {
  console.log(props.user);
  const isAdmin = () => {
    if (props.user._id.isAdmin === true) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      {isAdmin() ? (
        <>
          <h1>Admin Page</h1>
          <h3>Add Products</h3>
          <Link to="/admin/new-product-form">Add a Product</Link>
          <h3>Add Admin</h3>
        </>
      ) : (
        <>
          <h1>Unauthorized</h1>
        </>
      )}
    </>
  );
};

export default Admin;
