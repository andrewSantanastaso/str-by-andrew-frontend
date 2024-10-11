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
import Cart from "./components/Cart/Cart";
import CartIcon from "./components/CartIcon/CartIcon";
import ProductShow from "./components/ProductShow/ProductShow";
import ProductEdit from "./components/ProductEdit/ProductEdit";
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
      {!user ? (
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignInForm setUser={setUser} />} />
          <Route path="/sign-up" element={<SignUpForm setUser={setUser} />} />
        </Routes>
      ) : (
        <>
          <NavHead handleSignout={handleSignout} cart={cart} />
          <Routes>
            <Route path="/sign-in" element={<SignInForm setUser={setUser} />} />
            <Route path="/sign-up" element={<SignUpForm setUser={setUser} />} />
            <Route
              path={`/home/${user._id._id}`}
              element={<Home user={user} setCart={setCart} cart={cart} />}
            />
            <Route
              path={`/home/${user._id._id}/:category`}
              element={<Home user={user} setCart={setCart} cart={cart} />}
            />
            <Route path="/" element={<Landing />} />
            <Route path="/admin" element={<Admin user={user} />} />
            <Route
              path="/admin/new-product-form"
              element={<NewProductForm />}
            />
            <Route
              path="/products/:userId/:productId"
              element={<ProductShow />}
            />
            <Route path="/products/edit/:productId" element={<ProductEdit />} />
            <Route
              path={`/cart/${user._id._id}`}
              element={<Cart setCart={setCart} />}
            />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
