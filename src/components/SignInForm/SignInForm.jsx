import { useState, useEffect } from "react";
import { Link, redirect, useNavigate } from "react-router-dom";
import * as authService from "../../services/authService";
import { alignPropType } from "react-bootstrap/esm/types";

const SignInForm = (props) => {
  const navigate = useNavigate(); // added this for navigation purposes

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const redirectCurrentuser = async () => {
    {
      const currentUser = await authService.getUser();

      if (!currentUser) {
        alert("Username or password incorrect");
        redirect("/sign-in");
        throw new Error();
      }
      if (currentUser._id.isAdmin === true) {
        navigate("/admin");
      } else {
        console.log(currentUser);
        navigate(`/home/${currentUser._id._id}`);
      }
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData);

      props.setUser(user);
      console.log(user);
      redirectCurrentuser();
    } catch (err) {
      console.error({ error: err.message });
    }
  };

  return (
    <main>
      <h1>Log In</h1>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            autoComplete="off"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button>Log In</button>
          <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
};
export default SignInForm;
