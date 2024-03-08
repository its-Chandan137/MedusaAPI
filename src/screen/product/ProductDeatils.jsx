import { NavLink, useParams } from "react-router-dom";
import { productlists } from "../../assets/data/data";
import { BodyOne, Caption, Title } from "../../components/common/CustomComponents";
import { RenderRatingStars } from "../../components/product/ProductCard";
import { useState } from "react";
import { BiHeart, BiMinus, BiPlus } from "react-icons/bi";
import { CartActions } from "../../redux/slice/cartSlice";
import { useDispatch } from "react-redux";

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
  const product = productlists.find((product)=>product.id ===parseInt(productId))

  const { id, title, images, description , price,  discount , rating , color } = product;

  const [selectedColor, setSelectedColor] = useState(color[0].value)
  const [selectedPrice, setSelectedPrice] = useState(
    price.find((price)=> price.color === color[0].value)
  );

  const handleColorClick = (color) => {
    const newSelectedPrice = price.find((price)=> price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };

  const dispatch = useDispatch()

  const discountPrice = price[0].value - (price[0].value * discount)/100;
  const addToCart = () => {
    dispatch(CartActions.addToCart({id, title, price: discountPrice, images}))
  }

  // if (!product)
  // {
  //   return <div>Product Not Found</div>
  // }
  return (
    <>
      <section className="container mt-32 slideproduct">
        <div className="flex justify-between flex-col lg:flex-row" key={productId}>
          <div className="images lg:w-1/2">
            <div>
              {images.slice(0, 1).map((image,i)=>(
                <img 
                key={i} 
                src={image.image} 
                alt={title} 
                className='w-full h-full object-contain pt-10' />
              ))}
            </div>
          </div>
          <div className="details lg:w-1/2 px-16 pt-16">
              <button className="feature-btn bg-indigo-500">
                SALE {discount}% OFF
              </button>
              <Title level={2} className="my-2">
                {title}
              </Title>
              <div className="flex items-center gap-2 -mt-5 mb-5">
                <div className="flex items-center gap-1">
                  {RenderRatingStars(rating)}
                </div>
                <p>{product.rating} Review</p>
              </div>
              <p className="text-[15px]">{description}</p>
              <br />
              <div>
                <Caption>Colors</Caption>
                <div className="flex items-center gap-3 mt-5">
                  {color.map((colorOption,i)=>(
                    <div 
                    key={i} 
                    onClick={()=>handleColorClick(colorOption.value)}
                    className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border-gray-300 
                    ${selectedColor === colorOption.value ? "selected" : ""}`}
                    style={{backgroundColor : colorsValue[colorOption.value]}}>
                      
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <Caption>
                  Price
                </Caption>
                <div className="flex items-center gap-3">
                  <BodyOne className="line-through mt-4">
                  &#8377;{selectedPrice.value}
                  </BodyOne>
                  <Title level={4} className="text-primary-green">
                  &#8377;{" "}
                    {
                      (selectedPrice.value - (selectedPrice.value * product.discount)/100).toFixed(2)
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
