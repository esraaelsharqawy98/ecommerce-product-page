import { useState } from "react";
import Quantity from "../Quantity/Quantity";
import "./ProductDetails.css";
function ProductDetails({product , setCartCount}) {
  const currentPrice = parseFloat(product.currentPrice).toFixed(2);
  const oldPrice = parseFloat(product.oldPrice).toFixed(2);
  const [quantity, setQuantity] = useState(0);
  function addToCart() {
      setCartCount(quantity)
  }
  return (
    <section id="product-details">
      <h3 className="brand">{product.brand}</h3>
      <h1 className="product-name">{product.name}</h1>
      <p className="description">
        {product.description}
      </p>
      <div className="price-wrapper">
        <div className="product-price">
          <span className="current-price">${currentPrice}</span>
          <span className="discount">{product.discount}%</span>
        </div>
        <span className="old-price">
          <s>${oldPrice}</s>
        </span>
      </div>
      <div className="buttons">
        <Quantity quantity={quantity} setQuantity={setQuantity}/>
        <button className="add-to-cart" onClick={addToCart}>
          <img src="/images/icon-cart.svg" alt="" />
          Add to Cart</button>
      </div>
    </section>
  );
}
export default ProductDetails;
