import Pagination from "./Pagination";
import { useState, useEffect } from "react";
import reviewServices from "../services/reviewService";

const Review = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    loadComments();
  }, []);

  const loadComments = () => {
    reviewServices
      .list()
      .then((response) => {
        setComments(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="box">
      <div className="box-header">review</div>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="user-rate">
            <div className="user-info">
              <div className="user-avt">
                <img src={'https://doge-shop.000webhostapp.com/public/images/doge.png'} alt="avt" />
              </div>
              <div className="user-name">
                <span className="name">{comment.name}</span>
                <span className="rating">
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                  <i className="bx bxs-star" />
                </span>
              </div>
            </div>
            <div className="user-rate-content">
              {comment.content}
            </div>
          </div>
        ))}
        <div className="box">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Review;
