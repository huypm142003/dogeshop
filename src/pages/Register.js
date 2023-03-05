import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import userServices from "../services/userService";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const newUser = { ...user };
    newUser[e.target.name] = e.target.value;
    newUser[e.target.email] = e.target.value;
    newUser[e.target.password] = e.target.value;
    setUser(newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userServices.create(user).then(
      () => {
        setUser({
          name: "",
          email: "",
          password: "",
        });
        toast.success("User created successfully! Please login!");
        navigate("/login");
      },
      () => {
        toast.error("Cannot create user!!!");
      }
    );
  };

  return (
    <div className="container">
      <div className="box">
        <div className="breadcumb">
          <Link to="/">home</Link>
          <span>
            <i className="bx bxs-chevrons-right" />
          </span>
          <Link to="/register">Register</Link>
        </div>
      </div>
      <div className="login-page">
        <div className="form">
          <form className="register-form">
            <h2>Create An Account</h2>
            <input
              autoFocus
              name="name"
              type="text"
              value={user.name}
              placeholder="Name"
              onChange={handleChange}
            />
            <input
              name="email"
              type="text"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <button onClick={handleSubmit}>create</button>
            <p className="message">
              Already registered? <Link to="/login">Sign In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
