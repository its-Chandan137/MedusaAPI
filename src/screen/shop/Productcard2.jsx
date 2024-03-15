import React, { useState } from "react";
import { IoCart, IoClose } from "react-icons/io5";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { BodyOne, Title } from "../../components/common/CustomComponents";
import { AiFillInstagram } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { CartActions, selectQuantity } from "../../redux/slice/cartSlice";
import productSlice, { fetchProducts, fetchSingleProduct } from "../../redux/slice/productSlice";


export const ProductCard2 = ({
  id,
  title,
  description,
  images,
  price,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch()

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const singleQuantity = useSelector(selectQuantity(id)); 



  console.log(singleQuantity)



 const addToCart = () => {
  dispatch(CartActions.addToCart({id,title,price,images}))
 }

const wishlist = () => {
  dispatch(CartActions.wishlist({id,title,price,images}))
}

  return (
    <>
      <div className="product card">
        <div className="images h-72">
            <NavLink to={`/product-details/${id}`}>
              <img src={images}
                alt={title}
                className="w-full h-full object-contain"
              />
            </NavLink>
          <div className="overlay flex items-center gap-2 justify-center absolute bottom-0 left-0 right-0 m-5">
            <button
              onClick={openModal}
              className="quick-view-btn product-btn primary-btn"
            >
              Quick View
            </button>

            <button 
            onClick={addToCart}
            className="add-to-cart-btn product-btn primary-btn">
              <IoCart size={23} />
            </button>

            <button
            onClick={wishlist} 
            className="love-btn product-btn primary-btn">
              <IoMdHeart size={23} />
            </button>
          </div>
        </div>
        <div className="details flex items-center flex-col bg-white pt-6">
          <NavLink to={`/product-details/${id}`}>
            <BodyOne>{title}</BodyOne>
          </NavLink>
          <div className="flex items-center gap-3">
              <>
                <BodyOne>
                {/*&#8377; === rupees Symbol text */}
                &#8377;
                {price}
                </BodyOne>
              </>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <>
          <div className="overlay-bg" onClick={closeModal}>
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content flex justify-between"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-1/2 h-[500px] overflow-hidden px-4">
                    <img src={images}
                      alt={title}
                      className="modal-image w-full h-full object-contain"
                    />
                </div>
                <div className="modal-details w-1/2 h-[500px] overflow-y-scroll p-9">
                  <Title level={2}>{title}</Title>
                    <div className="flex items-center gap-3">
                      <BodyOne>
                      &#8377;{price}
                      </BodyOne>
                    </div>
                  <BodyOne className="text-sm leading-6">{description}</BodyOne>
                <div className="flex gap-7">
                  <div className="flex items-center gap-3">
                    <input type="text" value={singleQuantity} className="w-12 h-12 text-primary outline-none border-2 border-primary px-4" />
                  </div>
                  <NavLink to={"/cart"}>
                    <button onClick={addToCart} className="primary-btn">ADD TO CART</button>
                  </NavLink>
                </div>
                  <hr className="my-5"/>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <Title level={5} className="text-lg">
                                Category : <span className="font-normal">Product</span>
                            </Title>
                        </div>
                        <div className="flex items-center gap-3">
                            <Title level={5} className="text-lg">
                                Tag : <span className="font-normal">Fancy</span>
                            </Title>
                        </div>
                        <div className="flex items-center gap-3">
                            <Title level={5} className="text-lg">
                                Share :
                            </Title>
                            <div className="flex items-center -mt-1 gap-3">
                                <FaFacebook/>
                                <AiFillInstagram/>
                                <FaTwitter/>
                            </div>
                        </div>
                    </div>
                    <button className="close-btn overflow-hidden absolute top-0 right-0 w-12 h-12 flex justify-center items-center bg-primary-green text-white"
                    onClick={closeModal}>
                        <IoClose size={25}/>
                    </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
