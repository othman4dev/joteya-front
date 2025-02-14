const Sorter = () => {
  return (
    <div className="sorter">
      <div className="order">
        <h2 className="order-by">Order by:</h2>
        <div className="order-choices">
          <div className="order-choice current-order">
            <p>Name</p>
            <i className="bi bi-arrow-down"></i>
          </div>
          <div className="order-choice">
            <p>Date</p>
            <i className="bi bi-arrow-down"></i>
          </div>
          <div className="order-choice">
            <p>Price</p>
            <i className="bi bi-arrow-down"></i>
          </div>
          <div className="order-choice">
            <p>Status</p>
            <i className="bi bi-arrow-down"></i>
          </div>
        </div>
      </div>
      <div className="view">
        <div className="view-option current-view">
          <i className="bi bi-grid-3x3-gap-fill"></i>
        </div>
        <div className="view-option">
          <i className="bi bi-menu-button-wide"></i>
        </div>
      </div>
    </div>
  );
};

export default Sorter;
