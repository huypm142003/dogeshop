import { Link } from "react-router-dom";
import { Pagination } from "../components";
import { useState, useEffect } from "react";
import blogServices from "../services/blogService";

const Blog = () => {
  const [listBlogs, setListBlogs] = useState([]);

  useEffect(() => {
    blogServices.list().then((response) => {
      setListBlogs(response);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="box">
          <div className="breadcumb">
            <Link to="/">home</Link>
            <span>
              <i className="bx bxs-chevrons-right" />
            </span>
            <Link to="/blogs">blog</Link>
          </div>
        </div>
        {listBlogs.map((blog, index) => (
          <div key={index} className={index % 2 === 0 ? 'blog' : 'blog row-revere'}>
          <div className="blog-img">
            <img src={blog.image} alt="blog" />
          </div>
          <div className="blog-info">
            <div className="blog-title">
              {blog.title}
            </div>
            <div className="blog-preview">
              {blog.content}
            </div>
            <button className="btn-flat btn-hover">read more</button>
          </div>
        </div>
        ))}
        <div className="section-footer">
          <Pagination/>
        </div>
      </div>
    </>
  );
};

export default Blog;
