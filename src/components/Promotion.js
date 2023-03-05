import { Link } from "react-router-dom";


const promotion = [
  {
    id: 1,
    title: "Headphone & Earbuds",
    image: "https://doge-shop.000webhostapp.com/public/images/Focal Clear MG-1.png",
  },
  {
    id: 2,
    title: "Classic Earphones",
    image: "https://doge-shop.000webhostapp.com/public/images/FiiO FH15-1.png",
  },
  {
    id: 3,
    title: "Wireless Headphones",
    image: "https://doge-shop.000webhostapp.com/public/images/Klipsch T5 True Wireless-1.png",
  },
];

function Promotion() {
  return (
    <div className="promotion">
      <div className="row">
        {promotion.map((item) => (
          <div key={item.id} className="col-4 col-md-12 col-sm-12">
            <div className="promotion-box">
              <div className="text">
                <h3>{item.title}</h3>
                <Link to="/products">
                  <button className="btn-flat btn-hover">
                    <span>shop collection</span>
                  </button>
                </Link>
              </div>
              <img src={item.image} alt="promotionImage" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Promotion;
