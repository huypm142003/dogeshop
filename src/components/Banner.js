import { useState, useEffect } from "react";
import bannerServices from "../services/bannerService";
import { Link } from "react-router-dom";

function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    loadBanners();
  }, []);

  const loadBanners = () => {
    bannerServices
      .list()
      .then((response) => {
        setBanner(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className="hero">
      <div className="slider">
        <div className="container">
          {banner.map((item, index) => (
            <div
              key={item.id}
              className={index === 0 ? "slide active" : "slide"}
            >
              <div className="info">
                <div className="info-content">
                  <h3 className="top-down">{item.title}</h3>
                  <h2 className="top-down trans-delay-0-2">{item.subtitle}</h2>
                  <p className="top-down trans-delay-0-4">{item.description}</p>
                  <div className="top-down trans-delay-0-6">
                    <Link to={"/products/" + item.productId}>
                      <button className="btn-flat btn-hover">
                        <span>shop now</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="img right-left">
                <img src={item.image} alt="bannerImage" />
              </div>
            </div>
          ))}
        </div>

        <button className="slide-controll slide-next">
          <i className="bx bxs-chevron-right" />
        </button>
        <button className="slide-controll slide-prev">
          <i className="bx bxs-chevron-left" />
        </button>
      </div>
    </div>
  );
}
export default Banner;
