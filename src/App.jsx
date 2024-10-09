import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import * as authService from "../src/services/authService";
import * as productService from "../src/services/productService";
import NavHead from "./components/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/Home";
import SignInForm from "./components/SignInForm/SignInForm";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import Admin from "./components/Admin/Admin";
import NewProductForm from "./components/NewProductForm/NewProductForm";
import CartIcon from "./components/Cart/CartIcon";
import ProductShow from "./components/ProductShow/ProductShow";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const [cart, setCart] = useState([]);

  const navigate = useNavigate();
  const handleSignout = () => {
    setUser("");
    authService.signout();
    navigate("/");
  };
  let currentUser = authService.getUser();

  return (
    <>
      <NavHead
        handleSignout={handleSignout}
        cart={cart}
        element={<CartIcon path="/cart" />}
      />
      <Routes>
        {user ? (
          <Route path="/home" element={<Home user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route
          path="/sign-in"
          element={<SignInForm setUser={setUser} user={currentUser} />}
        />
        <Route path="/sign-up" element={<SignUpForm setUser={setUser} />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/" element={<Landing />} />

        <Route path="/admin" element={<Admin user={user} />} />
        <Route path="/admin/new-product-form" element={<NewProductForm />} />
        <Route path="/products/:productId" element={<ProductShow />} />
      </Routes>
    </>
  );
};

export default App;
