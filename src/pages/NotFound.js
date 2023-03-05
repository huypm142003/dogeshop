import { Link } from "react-router-dom";
import notfound from "../assets/images/404-page.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="breadcumb">
          <Link to="/">home</Link>
          <span>
            <i className="bx bxs-chevrons-right" />
          </span>
          <Link to="*">404</Link>
        </div>
      </div>
      <div className="not-found" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <img src={notfound} alt="404" style={{ width: "65%" }}/>
      </div>
    </div>
  );
};

export default NotFound;
