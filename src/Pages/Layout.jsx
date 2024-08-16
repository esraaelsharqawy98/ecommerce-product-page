import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
function Layout({ cartCount , setCartCount , product}) {
  return (
    <div className="container">
      <NavBar cartCount={cartCount} setCartCount={setCartCount} product={product}/>
      <Outlet/>
    </div>
  );
}
export default Layout;
