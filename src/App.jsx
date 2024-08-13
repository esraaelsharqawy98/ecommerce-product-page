import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Pages/Layout'
import Product from './Pages/Product'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
         <Route index element={<Product/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
