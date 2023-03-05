import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from '../store/cartSlice';
import { toast } from "react-toastify";

function Product({ product, size }) {
  const colSize =
    size === 4 ? "col-4 col-md-6 col-sm-12" : "col-3 col-md-6 col-sm-12";
  
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    const item = {quantity: 1, ...product };
    dispatch(addItem(item));
    toast.success(`${product.name} Added To Cart!`);
  };

  return (
    <Link to={"/products/" + product.id} className={colSize}>
      <div className="product-card">
        <div className="product-card-img">
          <img src={product.image1} alt="productImage" />
          <img src={product.image2} alt="productImage" />
        </div>
        <div className="product-card-info">
          <div className="product-btn">
            <button onClick={handleAddToCart} className="btn-flat btn-hover btn-cart-add">
              Add to cart
            </button>
          </div>
          <div className="product-card-name">{product.name}</div>
          <div className="product-card-price">
            <span className="curr-price">{product.price}$</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
