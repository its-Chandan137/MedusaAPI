import { productlists } from "../../assets/data/data"
// import { productList2 } from "../../assets/data/productList2"
import { BodyOne, Title } from "../../components/common/CustomComponents"
import { ProductCard } from "../../router"
import { ProductCard2 } from "../../router"
import { fetchProducts } from "../../redux/slice/productSlice"
import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect } from "react"



export const Product = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchProducts());
    console.log("state - ", state.products.data.map((product) => product.title)
    );
    if (state.isLoading) {
      return <h1>Loading...</h1>;
    }
  },[])

  const showProducts = (state.products.data);
  console.log(showProducts)

   return (
     <div>
      <section className="py-20 bg-white">
        <div className="container">
          <Title level={4}>Most Popular Products</Title>
          <div className="flex items-center gap-3 uppercase">
            <BodyOne className="text-sm">All Products (39)</BodyOne>
            <BodyOne className="text-sm text-primary-green">Wooden Products (15)</BodyOne>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {showProducts.map((product)=>(
              <ProductCard2 
              id={product.id}
              key={product.id}
              title={product.title}
              description={product.description}
              images={product.image}
              price={product.price}
              // discount={product.discount}
              // rating={product.rating}
              // featured={product.featured}
              // color={product.color}
              />
            ))}
          </div>
          
        </div>
      </section>
     </div>
   )
 }
 