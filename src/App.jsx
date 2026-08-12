import React, { useEffect } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { About, Blog, CartPage, Contact, Home, Layout, Login, ProductDeatils, Profile, Register, Services, Shop } from './router';
import './styles/index.css'



export const App = () => {
  useEffect(() => {
    const s = document.createElement('script')
    s.src = 'https://leadpilotgrowth.com/widget.js'
    s.async = true
    s.dataset.clientId = '40049a0e-087d-46b7-8ce9-3592848fb918'
    s.dataset.apiUrl = 'https://leadpilotgrowth.com'
    s.dataset.widgetSrc = 'https://leadpilotgrowth.com/widget-dist/widget.js'
    document.body.appendChild(s)
    return () => document.body.removeChild(s)
  }, [])
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
        <Route path="/profile" element={<Layout><Profile/></Layout>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
