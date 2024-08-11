import MenuIcon from "/images/icon-menu.svg";
import './MenuButton.css'

function MenuButton({setiIsNavMenuVisible}) {
  function toggleNavMenu(){
    setiIsNavMenuVisible(prev => !prev);
  }
  return (
    <div className="menu" >
      <img src={MenuIcon} alt="menu icon" onClick={toggleNavMenu}/>
    </div>
  );
}
export default MenuButton;
