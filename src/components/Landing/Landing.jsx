import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <h1>Welcome to STR by Andrew</h1>
      <ul>
        <li>
          <Link to="/sign-in">Sign In</Link>
        </li>
        <li>
          <Link to="/sign-up">Sign Up</Link>
        </li>
      </ul>
    </div>
  );
};

export default Landing;
