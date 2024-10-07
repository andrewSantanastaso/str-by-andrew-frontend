import * as authServices from "../services/authService";

const Home = (props) => {
  const user = props.user._id || props.user.user;
  console.log(user);
  return <h1>Welcome {user.name} </h1>;
};

export default Home;
