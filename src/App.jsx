import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import * as authService from "../src/services/authService";
import NavHead from "./components/NavBar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import SignInForm from "./components/SignInForm";
import SignUpForm from "./components/SignUpForm";
import Admin from "./components/Admin";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const handleSignout = () => {
    authService.signout();
    setUser(null);
  };
  let currentUser = async () => {
    await authService.getUser();
  };
  currentUser = user._id;
  return (
    <>
      <NavHead />
      <Routes>
        {user ? (
          <Route path="/home" element={<Home user={user} />} />
        ) : (
          <Route path="/" element={<Landing />} />
        )}
        <Route path="/sign-in" element={<SignInForm setUser={setUser} />} />
        <Route path="sign-up" element={<SignUpForm setUser={setUser} />} />
        <Route path="/home" element={<Home user={currentUser} />} />
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
