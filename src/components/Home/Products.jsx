import { useEffect } from "react";
import Product from "./includes/Product";
import { getProducts } from "../../services/product.service";
import { useState } from "react";
import fakeProducts from "../../data/products";

const Products = () => {
  const products = fakeProducts;

  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
