import { NavLink, useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";
import { BodyOne, Caption, Title } from "../../components/common/CustomComponents";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { CartActions } from "../../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import productSlice, { fetchProducts, fetchSingleProduct } from "../../redux/slice/productSlice";
import { useEffect } from "react";

const colorsValue = {
  red: "#fe7fef",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  white: "#f8f8f8",
  brown: "#a52a2a",
  clear: "#ffffff",
  "dark brown": "#654321",
  light: "#f5f5dc",
  black: "#000000",
  natural: "#8b4513",
  "light brown": "#deb887",
  dark: "#696969",
  gray: "#808080",
  beige: "#f5f5dc",
};


export const ProductDeatils = () => {
  const {productId} = useParams()
  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.singleProduct)

  useEffect(() => {
    dispatch(fetchSingleProduct(productId))
  }, [])


  console.log("data = " , useSelector((state) => state.products.singleProduct))

  // console.log("prooooduct - ", data.find((product)=>product.id === parseInt(productId)))

  // const product = state.find((product)=>product.id === parseInt(productId))

  const { id, title, image, description , price} = product;

  const addToCart = () => {
    dispatch(CartActions.addToCart({id, title, price, images: image}))
  }

  if (!product)
  {
    return <div>Product Not Found</div>
  }
  return (
    <>
      <section className="container mt-32 slideproduct">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="images lg:w-1/2">
            <div>
                <img 
                src={image}
                alt={title} 
                className='w-full h-full object-contain pt-10' />
            </div>
          </div>
          <div className="details lg:w-1/2 px-16 pt-16">
              <Title level={2} className="my-2">
                {title}
              </Title>
              <p className="text-[15px]">{description}</p>
              <br />
              <div className="mt-5">
                <Caption>
                  Price
                </Caption>
                <div className="flex items-center gap-3">
                  <Title level={4} className="text-primary-green">
                  &#8377;{" "}
                    {
                      price
                    }
                  </Title>
                </div>
              </div>
              <br />
              <div className="flex items-center gap-3">
                <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                  <BiPlus size={20}/>
                </button>

                <input type="text" value="1" className="w-16 h-12 text-primary border border-gray-300 px-6" />

                <button className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300">
                  <BiMinus size={20}/>
                </button>
                <NavLink to={"/cart"}>
                    <button onClick={addToCart} className="primary-btn">ADD TO CART</button>
                </NavLink>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <button className="flex items-center gap-2 secondary-btn">
                  <BiHeart size={20}/>
                  Add to Wishlist
                </button>
                <button className="flex items-center gap-2 secondary-btn">
                  Compare
                </button>
              </div>
              <hr className="my-5" />
              <label htmlFor="">
                <span className="text-primary font-bold">SKU: </span>PRT584E63A
              </label>
              <br />
              <label htmlFor="">
                <span className="text-primary font-bold">Category: </span>Wooden Product
              </label>
          </div>
        </div>
      </section>
    </>
  )
}
