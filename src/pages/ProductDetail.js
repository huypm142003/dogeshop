import { Review } from "../components";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import productServices from "../services/productService";
import typeServices from "../services/typeService";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (Number(quantity) > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(Number(quantity) + 1);
  };

  const param = useParams();
  const [product, setProduct] = useState({});
  const [type, setType] = useState({});

  useEffect(() => {
    productServices
      .get(param.id)
      .then((res) => {
        setProduct(res);
        typeServices
          .get(res.type_id)
          .then((res) => {
            setType(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [param.id]);

  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault();
    const item = { quantity: quantity ? quantity : 0, ...product };
    console.log(item);
    dispatch(addItem(item));
    toast.success(`${product.name} Added To Cart!`);
  };

  return (
    <>
      <div className="bg-main">
        <div className="container">
          <div className="box">
            <div className="breadcumb">
              <Link to="/">home</Link>
              <span>
                <i className="bx bxs-chevrons-right" />
              </span>
              <Link to="/products">all products</Link>
              <span>
                <i className="bx bxs-chevrons-right" />
              </span>
              <Link to={"/products/" + product.id}>{product.name}</Link>
            </div>
          </div>
          <div className="row product-row">
            <div className="col-5 col-md-12">
              <div className="product-img" id="product-img">
                <img src={product.image1} alt="product-img" />
              </div>
              <div className="box">
                <div className="product-img-list">
                  <div className="product-img-item">
                    <img src={product.image1} alt="product-img" />
                  </div>
                  <div className="product-img-item">
                    <img src={product.image2} alt="product-img" />
                  </div>
                  <div className="product-img-item">
                    <img src={product.image3} alt="product-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 col-md-12">
              <div className="product-info">
                <h1>{product.name}</h1>
                <div className="product-info-detail">
                  <span className="product-info-detail-title">Type: </span>
                  <span className="product-info-detail-content">
                    {type.name}
                  </span>
                </div>
                <div className="product-info-detail">
                  <span className="product-info-detail-title">Rated:</span>
                  <span className="rating">
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                    <i className="bx bxs-star" />
                  </span>
                </div>
                <p className="product-description">{product.description}</p>
                <div className="product-info-price">{product.price}$</div>
                <div className="product-quantity-wrapper">
                  <div className="number-input">
                    <button
                      onClick={handleMinus}
                      type="button"
                      className="minus"
                    ></button>
                    <input
                      className="quantity"
                      id="quantity"
                      name="quantity"
                      readOnly
                      value={quantity}
                      type="number"
                    />
                    <button
                      onClick={handlePlus}
                      type="button"
                      className="plus"
                    ></button>
                  </div>
                </div>
                <div>
                  <button
                    onClick={handleAddToCart}
                    className="btn-flat btn-hover"
                  >
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="box-header">description</div>
            <div className="product-detail-description">
              <div className="product-detail-description-content">
                <p>{product.description}</p>
                <p>{product.descriptionDetail}</p>
              </div>
            </div>
          </div>
          <hr></hr>
          <Review />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
