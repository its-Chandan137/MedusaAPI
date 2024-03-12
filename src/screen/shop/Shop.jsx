import { useDispatch, useSelector } from "react-redux"
import { ProductCard, ProductCard2 } from "../../router"
import { useEffect } from "react"
import productSlice, { fetchProducts } from "../../redux/slice/productSlice"


export const Shop = () => {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  useEffect(()=>{
    dispatch(fetchProducts())
    console.log("state - ", state.products.data.map((product)=>product.title))
    if(state.isLoading)
    {
      return <h1>Loading...</h1>
    }
  },[])

   return (
    <>
      <section className="container mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
          {
            state.products.data.map((productx)=>(
              <ProductCard2
              id={productx.id}
              key={productx.id}
              title={productx.title}
              description={productx.description}
              images={productx.image}
              price={productx.price}
              />
            ))
          }
      </section>
    </>
   )
}

