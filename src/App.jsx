import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { About, Blog, Contact, Home, Layout, Product, Services, Shop } from './router';
import './styles/index.css'



export const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home index/></Layout>}/>
        <Route path="/shop" element={<Layout><Shop/></Layout>}/>
        <Route path="/blog" element={<Layout><Blog/></Layout>}/>
        <Route path="/about" element={<Layout><About/></Layout>}/>
        <Route path="/services" element={<Layout><Services/></Layout>}/>
        <Route path="/contact" element={<Layout><Contact/></Layout>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
