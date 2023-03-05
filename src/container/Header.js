import { Link, NavLink, useNavigate } from "react-router-dom";
import productServices from "../services/productService";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { toast } from "react-toastify";

const Header = () => {
  const navige = useNavigate();

  const [search, setSearch] = useState("");

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  const cartQuantity = cartItems.length;

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      productServices
        .search(e.target.value)
        .then((response) => {
          setSearch(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setSearch("");
    }
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      if (typeof search === "object" && search.length > 0) {
        navige(`/search?query=${e.target.value}`);
        //reload page
        window.location.reload();
      } else {
        toast.error("Product not found!");
      }
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logout successful!");
    navige("/");
  };

  return (
    <header>
      <div className="mobile-menu bg-second">
        <Link to="/" className="mb-logo">
          DogeShop
        </Link>
        <span className="mb-menu-toggle" id="mb-menu-toggle">
          <i className="bx bx-menu" />
        </span>
      </div>
      <div className="header-wrapper" id="header-wrapper">
        <span className="mb-menu-toggle mb-menu-close" id="mb-menu-close">
          <i className="bx bx-x" />
        </span>
        <div className="bg-main">
          <div className="mid-header container">
            <Link to="/" className="logo">
              DogeShop
            </Link>
            <div className="search">
              <input
                id="search"
                onKeyDown={handleSearch}
                onChange={handleChange}
                type="text"
                placeholder="Search"
              />
              <i className="bx bx-search-alt" />
            </div>
            <ul className="user-menu">
              <li>
                <Link to="/cart">
                  <i className="bx bx-cart" />
                  <span className="cart-quantity" id="cart-quantity">
                    {cartQuantity}
                  </span>
                </Link>
              </li>
              <li>
                {isLoggedIn ? (
                  <Link onClick={ handleLogout }>
                    <i className="bx bx-log-out-circle"></i>
                  </Link>
                ) : (
                  <Link to="/login">
                    <i className="bx bx-user-circle" />
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-second">
          <div className="bottom-header container">
            <ul className="main-menu">
              <li>
                <NavLink to="/">home</NavLink>
              </li>
              <li>
                <NavLink to="/products">shop</NavLink>
              </li>
              <li>
                <NavLink to="/blogs">blog</NavLink>
              </li>
              <li>
                <NavLink to="/contact">contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
