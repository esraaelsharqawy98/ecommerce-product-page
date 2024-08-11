import { Link } from "react-router-dom";
import "./NavBar.css";
import CartIcon from "/images/icon-cart.svg";
import ProfileImage from "/images/image-avatar.png";
import Logo from "/images/logo.svg";
import NavMenu from "../NavMenu/NavMenu";
import MenuButton from "../MenuButton/MenuButton";
import { useState } from "react";
function NavBar() {
    const [isNavMenuVisible , setiIsNavMenuVisible] = useState(false);
  return (
    <>
      <nav>
        <div className="container">
          <MenuButton setiIsNavMenuVisible={setiIsNavMenuVisible}/>
          <div className="logo">
            <h1>
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </h1>
          </div>
          <ul className="nav-list">
            <li>
              <Link to="/Collections">Collections</Link>
            </li>
            <li>
              <Link to="/Men">Men</Link>
            </li>
            <li>
              <Link to="/Women">Women</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <div className="nav-icons">
            <Link to="/Cart">
              <img src={CartIcon} className="cart" alt="cart icon" />
            </Link>
            <img src={ProfileImage} className="profile" alt="profile image" />
          </div>
        </div>
      </nav>

      {
        isNavMenuVisible && <NavMenu setiIsNavMenuVisible={setiIsNavMenuVisible}/>
      }
    </>
  );
}
export default NavBar;
