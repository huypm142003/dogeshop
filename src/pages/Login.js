import { Link, useNavigate } from "react-router-dom";
import userServices from "../services/userService";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    userServices
      .login(email, password)
      .then((res) => {
        dispatch(login({
          userInfo: res.data,
        }));
        toast.success("Login successful!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Login failed!");
      });
  };

  return (
    <div className="container">
      <div className="box">
        <div className="breadcumb">
          <Link to="/">home</Link>
          <span>
            <i className="bx bxs-chevrons-right" />
          </span>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={formSubmitHandler}>
            <h2>Login to DogeShop</h2>
            <input
              autoFocus
              name="email"
              value={email}
              onChange={handleChange}
              type="text"
              placeholder="Email"
            />
            <input
              name="password"
              value={password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
            />
            <button type="submit">login</button>
            <p className="message">
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
