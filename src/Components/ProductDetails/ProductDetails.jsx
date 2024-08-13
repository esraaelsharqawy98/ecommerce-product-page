import Quantity from "../Quantity/Quantity";
import "./ProductDetails.css";
function ProductDetails({product}) {
  const currentPrice = parseFloat(product.currentPrice).toFixed(2);
  const oldPrice = parseFloat(product.oldPrice).toFixed(2);
  return (
    <section id="product-details">
      <h5 className="brand">{product.brand}</h5>
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
        <Quantity/>
        <button className="add-to-cart">
          <img src="/images/icon-cart.svg" alt="" />
          Add to Cart</button>
      </div>
    </section>
  );
}
export default ProductDetails;
