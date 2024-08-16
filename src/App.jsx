import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Collections from './Pages/Collections'
import { useState } from 'react'

function App() {
  const [product, setproduct] = useState(
   {
      "id": 1,
      "name": "Fall Limited Edition Sneakers",
      "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      "brand": "Sneakers Company",
      "currentPrice": 125.0,
      "discount": 50,
      "oldPrice": 250.0,
      "productImages": [
        "/images/image-product-1.jpg",
        "/images/image-product-2.jpg",
        "/images/image-product-3.jpg",
        "/images/image-product-4.jpg"
      ],
      "thumbnails": [
        "/images/image-product-1-thumbnail.jpg",
        "/images/image-product-2-thumbnail.jpg",
        "/images/image-product-3-thumbnail.jpg",
        "/images/image-product-4-thumbnail.jpg"
      ]
    }
  );
  const [cartCount, setCartCount] = useState(0);
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout cartCount={cartCount} setCartCount={setCartCount} product={product}/>}>
         <Route index element={<Product setCartCount={setCartCount} product={product} setproduct={setproduct}/>}/>
         <Route path='Men' element={<Men/>}/>
         <Route path='Women' element={<Women/>}/>
         <Route path='Collections' element={<Collections/>}/>
         <Route path='About' element={<About/>}/>
         <Route path='Contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
