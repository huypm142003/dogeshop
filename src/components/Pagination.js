const Pagination = () => {
  return (
    <ul className="pagination">
      <li>
        <a href="/#">
          <i className="bx bxs-chevron-left" />
        </a>
      </li>
      <li>
        <a href="/#" className="active">
          1
        </a>
      </li>
      <li>
        <a href="/#">2</a>
      </li>
      <li>
        <a href="/#">3</a>
      </li>
      <li>
        <a href="/#">4</a>
      </li>
      <li>
        <a href="/#">5</a>
      </li>
      <li>
        <a href="/#">
          <i className="bx bxs-chevron-right" />
        </a>
      </li>
    </ul>
  );
};

export default Pagination;
