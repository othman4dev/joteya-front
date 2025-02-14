import { useEffect } from "react";

const Categories = () => {
  useEffect(() => {
    if (
      document.querySelector(
        `[data-category="${localStorage.getItem("currentCategory")}"]`
      )
    ) {
      document
        .querySelector(
          `[data-category="${localStorage.getItem("currentCategory")}"]`
        )
        .lastElementChild.classList.add("current-cat");
    }
  }, []);
  return (
    <div className="categories">
      <div className="category" data-category="shirts">
        <h2 className="category-title">Shirts</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="pants">
        <h2 className="category-title">Pants</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="hats">
        <h2 className="category-title">Hats</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="jackets">
        <h2 className="category-title">Jackets</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="shoes">
        <h2 className="category-title">Shoes</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="shorts">
        <h2 className="category-title">Shorts</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="accessories">
        <h2 className="category-title">Accessories</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="hoodies">
        <h2 className="category-title">Hoodies</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="sweet-pants">
        <h2 className="category-title">Sweet pants</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="spliter"></div>
      <div className="category" data-category="recent">
        <h2 className="category-title">Recent</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="trending">
        <h2 className="category-title">Trending</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="sold">
        <h2 className="category-title">Discount</h2>
        <div className="cat-bar"></div>
      </div>
      <div className="category" data-category="unsold">
        <h2 className="category-title">Stock</h2>
        <div className="cat-bar"></div>
      </div>
    </div>
  );
};

export default Categories;
