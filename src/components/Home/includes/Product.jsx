import productImage from "../../../assets/images/product.png";
import { useTranslation } from "react-i18next";

const Product = ({ product }) => {
  const { t } = useTranslation();

  return (
    <div className="product">
      <div className="product-half">
        <div className="product-images">
          <div
            className="main-image"
            style={{
              backgroundImage: `url("${product.mainImage || productImage}")`,
            }}
          >
            <div className="authenticity" title="Authenticity by publisher">
              <p>{product.authenticity || t("Unknown")}</p>
            </div>
          </div>
          <div className="secondary-images">
            <div
              className="secondary-image"
              style={{
                backgroundImage: `url("${product.image1 || productImage}")`,
              }}
            ></div>
            <div
              className="secondary-image"
              style={{
                backgroundImage: `url("${product.image2 || productImage}")`,
              }}
            ></div>
            <div
              className="secondary-image"
              style={{
                backgroundImage: `url("${product.image3 || productImage}")`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="product-half to-bottom">
        <div className="product-header">
          <div className="product-header-text">
            <h3 className="product-title">{product.name || t("Unnamed")}</h3>
            <p className="product-info">
              {product.date || t("Unknown")}, by {product.owner || t("Unknown")}
            </p>
          </div>
          <div className="product-status">{product.status || t("Unknown")}</div>
        </div>
        <p className="product-desc">
          {product.description || "No description"}
        </p>
        <div className="product-footer">
          <div className="product-footer-top">
            <p className="product-price">
              <span className="discount-price">
                {product.discountPrice || ""}$
              </span>
              <span className="price">{product.price || t("?")}$</span>
            </p>
            <p className="product-quantity">
              <span className="quantity">{product.stock || t("Unknown")}</span>{" "}
              {t("items left")}
            </p>
          </div>
          <div className="footer-bottom">
            <button className="add-to-cart">
              <p className="add-to-cart-text">{t("Add to cart")}</p>
              <i class="bi bi-plus-square"></i>
            </button>
            <div className="min-product-btn">
              <i className="bi bi-heart"></i>
            </div>
            <div className="min-product-btn">
              <i className="bi bi-three-dots-vertical"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
