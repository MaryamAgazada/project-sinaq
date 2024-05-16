import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import MainLayout from './layout/mainLayout/MainLayout';
import Home from './pages/MainPages/home/Home';
import Admin from './pages/MainPages/admin/Admin';
import AdminLayout from './layout/adminLayout/AdminLayout';
import Add from './pages/adminPages/add/Add';
import Basket from './pages/adminPages/basket/Basket';
import Product from './pages/adminPages/product/Product';
import MainProvider from './context/MainProvider';
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainProvider>
     <HelmetProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home/>} />
 
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
        <Route index  element={<Admin/>} />
          <Route path="/admin/product"  element={<Product/>} />
          <Route path="/admin/add" element={<Add/>} />
          <Route path="/admin/basket" element={<Basket/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </HelmetProvider>
    </MainProvider>
    </>
  )
}

export default App
