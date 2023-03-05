import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../components";
import { Product } from "../components";
import productServices from "../services/productService";
import typeServices from "../services/typeService";

const ProductListContainer = () => {
  const [type, setType] = useState([]);
  const [product, setProduct] = useState([]);
  const [min, setMin] = useState();
  const [max, setMax] = useState();

  useEffect(() => {
    loadProducts();
    loadTypes();
  }, []);

  const loadTypes = () => {
    typeServices
      .list()
      .then((response) => {
        setType(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const loadProducts = () => {
    productServices
      .list()
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //filter by price
  const handlerFilterByPrice = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    if (id === "min") {
      setMin(value);
    } else if (id === "max") {
      setMax(value);
    }
  };

  const handleFilterPrice = (e) => {
    if (e.key === "Enter") {
      if (min !== undefined && max !== undefined) {
        productServices
          .filterByPrice(min, max)
          .then((response) => {
            setProduct(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (max === undefined) {
        productServices
          .filterByPrice(min, undefined)
          .then((response) => {
            setProduct(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  //filter by featured and best seller
  const handlerFilerByFeaturedOrBestSeller = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;
    if (checked) {
      if (id === "featured") {
        productServices
          .filterByIsFeatured("1")
          .then((response) => {
            setProduct(response);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (id === "bestSeller") {
        productServices
          .filterByIsBestSeller("1")
          .then((response) => {
            setProduct(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      loadProducts();
    }
  };

  //filter by type
  const handleFilerByType = (e) => {
    const id = e.target.id;
    productServices
      .filterByType(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //clear filter
  const handleClear = () => {
    loadProducts();
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
            </div>
          </div>
          <div className="box">
            <div className="row">
              <div className="col-3 filter-col" id="filter-col">
                <div className="box filter-toggle-box">
                  <button className="btn-flat btn-hover" id="filter-close">
                    close
                  </button>
                </div>
                <div className="box">
                  <span
                    style={{
                      cursor: "pointer",
                      color: "#c0392b",
                      fontSize: "20px",
                    }}
                    onClick={handleClear}
                    className="filter-header"
                  >
                    X Clear Filter
                  </span>
                  <span className="filter-header">Product Types</span>
                  <ul className="filter-list">
                    {type.map((item) => (
                      <li key={item.id}>
                        <p
                          style={{ cursor: "pointer" }}
                          id={item.id}
                          onClick={handleFilerByType}
                        >
                          {item.name}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="box">
                  <span className="filter-header">Price</span>
                  <div className="price-range">
                    <input
                      id="min"
                      onKeyDown={handleFilterPrice}
                      onChange={handlerFilterByPrice}
                      type="text"
                    />
                    <span>-</span>
                    <input
                      id="max"
                      onKeyDown={handleFilterPrice}
                      onChange={handlerFilterByPrice}
                      type="text"
                    />
                  </div>
                </div>
                <div className="box">
                  <ul className="filter-list">
                    <li>
                      <div className="group-checkbox">
                        <input type="checkbox" id="inStock" />
                        <label htmlFor="inStock">
                          In stock
                          <i className="bx bx-check" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="group-checkbox">
                        <input
                          onChange={handlerFilerByFeaturedOrBestSeller}
                          type="checkbox"
                          id="bestSeller"
                        />
                        <label htmlFor="bestSeller">
                          Best seller
                          <i className="bx bx-check" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="group-checkbox">
                        <input
                          onChange={handlerFilerByFeaturedOrBestSeller}
                          type="checkbox"
                          id="featured"
                        />
                        <label htmlFor="featured">
                          Featured
                          <i className="bx bx-check" />
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="box">
                  <span className="filter-header">rating</span>
                  <ul className="filter-list">
                    <li>
                      <div className="group-checkbox">
                        <input type="checkbox" id="5star" />
                        <label htmlFor="5star">
                          <span className="rating">
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                          </span>
                          <i className="bx bx-check" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="group-checkbox">
                        <input type="checkbox" id="4star" />
                        <label htmlFor="4star">
                          <span className="rating">
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bx-star" />
                          </span>
                          <i className="bx bx-check" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="group-checkbox">
                        <input type="checkbox" id="3star" />
                        <label htmlFor="3star">
                          <span className="rating">
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                          </span>
                          <i className="bx bx-check" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="group-checkbox">
                        <input type="checkbox" id="2star" />
                        <label htmlFor="2star">
                          <span className="rating">
                            <i className="bx bxs-star" />
                            <i className="bx bxs-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                          </span>
                          <i className="bx bx-check" />
                        </label>
                      </div>
                    </li>
                    <li>
                      <div className="group-checkbox">
                        <input type="checkbox" id="1star" />
                        <label htmlFor="1star">
                          <span className="rating">
                            <i className="bx bxs-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                            <i className="bx bx-star" />
                          </span>
                          <i className="bx bx-check" />
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-9 col-md-12">
                <div className="box filter-toggle-box">
                  <button className="btn-flat btn-hover" id="filter-toggle">
                    filter
                  </button>
                </div>
                <div className="box">
                  <div className="row">
                    {product.map((product, index) => {
                      return <Product key={index} product={product} size={4} />;
                    })}
                  </div>
                </div>
                <div className="box">
                  <Pagination />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListContainer;
