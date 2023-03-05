import { Link, useNavigate } from "react-router-dom";
import empty_cart from "../assets/images/empty-cart.gif";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  incrementItem,
  decrementItem,
  clearCart,
} from "../store/cartSlice";
import cartServices from "../services/cartService";
import cartDetailServices from "../services/cartDetailService";
import { toast } from "react-toastify";

const Cart = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const { cartItems } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRemove = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncrement = (itemId) => {
    dispatch(incrementItem(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(decrementItem(itemId));
  };

  const cartQuantity = cartItems.length;

  const cartTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const userInfo = useSelector((state) => state.auth.userInfo);

  const cart = {
    user_id: userInfo.id,
    total: (cartTotal + 5) + (cartTotal * 0.05),
  };

  const cartDetails = {
    cart_id: "",
    product_id: "",
    quantity: "",
    price: "",
  };

  const handlePurchase = (e) => {
    e.preventDefault();
//     if (isLoggedIn) {
//       cartServices
//         .create(cart)
//         .then((res) => {
//           cartDetails.cart_id = res.id;
//           cartItems.forEach((item) => {
//             cartDetails.product_id = item.id;
//             cartDetails.quantity = item.quantity;
//             cartDetails.price = item.price;
//             cartDetailServices.create(cartDetails);
//           });
          dispatch(clearCart());
          toast.success("Purchase complete!");
          navigate("/purchase");
//         })
//         .catch((err) => {
//           console.log(err);
//         });
//     } else {
//       toast.error("Please login to purchase!");
//       navigate("/login");
//     }
  };

  return (
    <div className="container">
      <div className="box">
        <div className="breadcumb">
          <Link to="/">home</Link>
          <span>
            <i className="bx bxs-chevrons-right" />
          </span>
          <Link to="/cart">cart</Link>
        </div>
      </div>
      {cartQuantity === 0 ? (
        <div style={{ textAlign: "center", margin: "15px 0" }}>
          <h1 style={{ marginBottom: "10px" }}>Cart is empty!!!</h1>
          <p
            style={{ marginBottom: "10px", fontSize: "20px", color: "#c0392b" }}
          >
            <Link to="/products">Continue to shopping </Link>
          </p>
          <img
            src={empty_cart}
            alt="empty cart"
            style={{ borderRadius: "5px" }}
          />
        </div>
      ) : (
        <div className="shopping-cart">
          <div className="column-labels">
            <label className="product-image">Image</label>
            <label className="product-details">Product</label>
            <label className="product-price">Price</label>
            <label className="product-quantity">Quantity</label>
            <label className="product-line-price">Total</label>
            <label className="product-removal">Remove</label>
          </div>
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;
            return (
              <div key={item.id} className="product">
                <div className="product-image">
                  <img src={item.image1} alt="product" />
                </div>
                <div className="product-details">
                  <div className="product-title">{item.name}</div>
                  <p className="product-description">
                    {item.description.substring(0, 150)}...
                  </p>
                </div>
                <div className="product-price">{item.price}$</div>
                <div className="product-quantity">
                  <div>
                    <button
                      className="minus"
                      onClick={() => handleDecrement(item.id)}
                    >
                      <i className="bx bx-minus" />
                    </button>
                    <input
                      className="quantity"
                      id="quantity"
                      name="quantity"
                      readOnly
                      value={item.quantity}
                      type="number"
                    />
                    <button
                      className="plus"
                      onClick={() => handleIncrement(item.id)}
                    >
                      <i className="bx bx-plus" />
                    </button>
                  </div>
                </div>
                <div className="product-line-price">{itemTotal}$</div>
                <div className="product-removal">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="remove-product"
                  >
                    <i className="bx bx-trash" />
                  </button>
                </div>
              </div>
            );
          })}
          <div className="totals">
            <div className="totals-item">
              <label>Subtotal</label>
              <div className="totals-value" id="cart-shipping">
                {cartTotal}$
              </div>
            </div>
            <div className="totals-item">
              <label>Tax (5%)</label>
              <div className="totals-value" id="cart-shipping">
                {cartTotal * 0.05}$
              </div>
            </div>
            <div className="totals-item">
              <label>Shipping</label>
              <div className="totals-value" id="cart-shipping">
                5$
              </div>
            </div>
            <div className="totals-item totals-item-total">
              <label>Grand Total</label>
              <div className="totals-value" id="cart-total">
                {(cartTotal + 5) + (cartTotal * 0.05)}$
              </div>
            </div>
          </div>

          <a href="/#" onClick={handlePurchase} className="checkout">
            Purchase
          </a>
        </div>
      )}
    </div>
  );
};

export default Cart;
