import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Collection from './Pages/Collection'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
         <Route index element={<Product/>}/>
         <Route path='Men' element={<Men/>}/>
         <Route path='Women' element={<Women/>}/>
         <Route path='Collection' element={<Collection/>}/>
         <Route path='About' element={<About/>}/>
         <Route path='Contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
