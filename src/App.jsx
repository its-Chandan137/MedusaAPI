import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { About, Blog, CartPage, Contact, Home, Layout, Login, ProductDeatils, Register, Services, Shop } from './router';
import './styles/index.css'



export const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home index/></Layout>}/>
        <Route path="/home" element={<Layout><Home/></Layout>}/>
        <Route path="/shop" element={<Layout><Shop/></Layout>}/>
        <Route path="/blog" element={<Layout><Blog/></Layout>}/>
        <Route path="/about" element={<Layout><About/></Layout>}/>
        <Route path="/services" element={<Layout><Services/></Layout>}/>
        <Route path="/contact" element={<Layout><Contact/></Layout>}/>
        <Route path="/cart" element={<Layout><CartPage/></Layout>}/>
        <Route path="/login" element={<Layout><Login/></Layout>}/>
        <Route path="/register" element={<Layout><Register/></Layout>}/>
        <Route path="/product-details/:productId" element={<Layout><ProductDeatils/></Layout>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
