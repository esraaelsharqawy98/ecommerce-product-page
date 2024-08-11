import { Link } from "react-router-dom";
import "./NavMenu.css";
import CloseIcon from "/images/icon-close.svg";
function NavMenu({setiIsNavMenuVisible}) {

  function handleCloseMenu(){
     setiIsNavMenuVisible(false)
  }
  
  return (
    <div className="wrapper">
      <div className="nav-menu">
        <img src={CloseIcon} className="close" alt=" close icon" onClick={handleCloseMenu}/>
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
      </div>
    </div>
  );
}
export default NavMenu;
