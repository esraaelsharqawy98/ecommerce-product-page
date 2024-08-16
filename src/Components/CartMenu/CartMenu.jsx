import { useState } from "react";
import "./CartMenu.css";
function CartMenu({ cartCount , setCartCount , product}) {
  const currentPrice = parseFloat(product.currentPrice).toFixed(2);
  const ItemtotalPrice = (currentPrice * cartCount).toFixed(2);
  const [checkout , setCheckout] = useState(false)
  function handleDeleteCartItem(){
    setCartCount(0);
  }
  function handleCheckout(){
    setCheckout(!checkout);
    setCartCount(0);
  }
  return (
    <div className="cart-menu">
      <div className="cart-header">
        <h4>Cart</h4>
      </div>
      <div className="border" />
      <div className="cart-body">
        {cartCount ? (
          <>
            <div className="cart-product">
              <div className="cart-product-img">
                <img
                  src={product.thumbnails[0]}
                  alt="Product Image"
                />
              </div>
              <div className="cart-product-info">
                <p>{product.name}</p>
                <p>
                  ${currentPrice} x {cartCount} <span>${ItemtotalPrice}</span>
                </p>
              </div>
              <button className="delete-product-btn" onClick={handleDeleteCartItem}>
                <img src="./images/icon-delete.svg" alt="remove" />
              </button>
            </div>
            <div className="checkout">
              <button className="checkout-btn" type="button" onClick={handleCheckout}>
                Checkout
              </button>
            </div>
          </>
        ) : (
            <p className="empty-text">Your cart is empty </p>
        )}
      </div>
    </div>
  );
}
export default CartMenu;
