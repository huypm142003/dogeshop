import Product from "./Product";
import { useState, useEffect } from "react";
import productServices from "../services/productService";
import { Link } from "react-router-dom";

function ProductContainer({title, filter}) {
  const [productsList, setProductsList] = useState([]);
  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = () => {
    productServices
      .list()
      .then((response) => {
        const data = response.filter(
          (product) => product[filter] === 1
        );
        setProductsList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="section">
      <div className="container">
        <div className="section-header">
          <h2>{title}</h2>
        </div>
        <div className="row">
          {productsList.map((product, index) => (
            <Product key={index} product={product} size={3}/>
          ))}
        </div>
        <div className="section-footer">
          <Link to="/products" className="btn-flat btn-hover">
            view all
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;
