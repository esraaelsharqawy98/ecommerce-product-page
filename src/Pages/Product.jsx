import { useEffect} from "react";
import Carousel from "../Components/Carousel/Carousel";
import ProductDetails from "../Components/ProductDetails/ProductDetails";
import ProductGallery from "../Components/ProductGallery/ProductGallery";

function Product({setCartCount , product , setproduct}){

  // useEffect(() => {
  //   function callApi() {
  //     fetch("http://localhost:3000/product")
  //       .then((response) => response.json())
  //       .then((finalResult) => setproduct(finalResult));
  //   }
  //   callApi();
  // }, []);
return(
    <main>
        <Carousel product={product}/>
        <ProductGallery product={product}/>
        <ProductDetails product={product} setCartCount={setCartCount}/>
    </main>
)
}
export default Product;