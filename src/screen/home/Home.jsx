 import React from 'react'
import { Banner, Hero, InstagramPost, Product, ProductCard, ProductSlide, ShippingInfo, Testimonials } from '../../router'
import { Caption, Title } from '../../components/common/CustomComponents'
import { ProductsSlideCard } from '../../components/product/ProductSlide'
 
 export const Home = () => {
   return (
     <>
       <Hero/>
       <Product/>
       <ShippingInfo/>
       <Banner/>
       <ProductSlide/>
       <Testimonials/>

       <div className='container my-16 slideproduct'>
          <Title level={3}>Recent Product</Title>
          <Caption>DISCOVER THE MOST TRENDING PRODUCTS IN <a href="/home" 
                   className="text-sm text-green-600 cursor-pointer">MEDUSA</a>.
          </Caption>
          <br />
          <ProductsSlideCard/>
       </div>
       <InstagramPost/>
     </>
   )
 }
 