import { Link } from "react-router-dom";
import "./NavBar.css";
import CartIcon from "/images/icon-cart.svg";
import ProfileImage from "/images/image-avatar.png";
import Logo from "/images/logo.svg";
import MenuIcon from "/images/icon-menu.svg";
import NavMenu from "../NavMenu/NavMenu";
import { useState } from "react";
import CartMenu from "../CartMenu/CartMenu";
function NavBar({ cartCount , setCartCount , product}) {
  const [isNavMenuVisible, setiIsNavMenuVisible] = useState(false);
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  function toggleNavMenu() {
    setiIsNavMenuVisible(!isNavMenuVisible);
  }
  function toggleCartMenu() {
    setIsCartMenuVisible(!isCartMenuVisible);
  }
  return (
    <header>
      <nav>
        <div className="menu">
          <button className="btn" onClick={toggleNavMenu}>
            <img src={MenuIcon} alt="menu icon" />
          </button>
        </div>
        <div className="logo">
          <h1>
            <Link to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </h1>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/Collections">Collections</Link>
          </li>
          <li className="nav-item">
            <Link to="/Men">Men</Link>
          </li>
          <li className="nav-item">
            <Link to="/Women">Women</Link>
          </li>
          <li className="nav-item">
            <Link to="/About">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <div className="nav-icons">
          <button className="cart" onClick={toggleCartMenu}>
           { cartCount > 0 && <span className="count">{ cartCount }</span>}
            <img src={CartIcon} alt="cart icon" />
          </button>
          <img src={ProfileImage} className="profile" alt="profile image" />
        </div>
      </nav>
      {isCartMenuVisible && <CartMenu cartCount={cartCount} setCartCount={setCartCount} product={product}/>}
      {isNavMenuVisible && <NavMenu toggleNavMenu={toggleNavMenu} />}
    </header>
  );
}
export default NavBar;
