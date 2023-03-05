import { Link } from "react-router-dom";
import purchase from "../assets/images/purchase.mp4";

const Purchase = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="breadcumb">
          <Link to="/">home</Link>
          <span>
            <i className="bx bxs-chevrons-right" />
          </span>
          <Link to="/purchase">Purchase</Link>
        </div>
      </div>
      <div className="video-purchase" >
        <h1>
          Congratulations, purchase complete!!!
        </h1>
        <video autoPlay loop style={{ borderRadius: "5px" }}>
            <source
                src={purchase}
                type="video/mp4"
            />
        </video>
        <h1>
          Please wait for us to deliver to you 
          <span className="heart"> ♥</span>
        </h1>
      </div>
    </div>
  );
};

export default Purchase;
