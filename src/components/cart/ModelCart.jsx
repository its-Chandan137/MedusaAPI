import { IoCloseOutline, IoHeartOutline } from "react-icons/io5";
import { Badges, BodyOne, CustomNavLink, Title } from "../common/CustomComponents";
import { FaOpencart } from "react-icons/fa";
import { useState } from "react";
import { CartActions, selectTotalPrice, selectTotalQuantity } from "../../redux/slice/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export const ModelCart = () => {
  const totalQuantity = useSelector(selectTotalQuantity)
  const cartItems = useSelector((state) => state.cart.itemList)
  const totalPrice = useSelector(selectTotalPrice)

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");

  const openModel = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden";
  };

  const closeModel = () => {
    setIsClosing(true);
    document.body.style.overflowX = "auto";
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handelTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <button className="relative z-20" onClick={openModel}>
        <IoHeartOutline size={26} />
        <div className="absolute -top-2 -right-2">
          <Badges color="bg-primary-green">0</Badges>
        </div>
      </button>
      <button className="relative z-20" onClick={openModel}>
        <FaOpencart size={26} />
        <div className="absolute -top-2 -right-2">
          <Badges color="bg-primary-green">{totalQuantity}</Badges>
        </div>
      </button>

      {isOpen && (
        <>
          <div onClick={closeModel} className="cartoverlay"></div>

          <div
            className={`cartmodel p-16 text-primary 
            ${isClosing ? "closing" : ""}`}
          >
            <div className="flex justify-between gap-5">
              <button
                className={`flex items-center gap-2 font-medium
                ${activeTab === "wishlist" ? "text-primary" : ""}`}
                onClick={() => handelTabChange("cart")}
              >
                Shopping Cart
                <span className="w-7 h-7 rounded-full text-[11px] font-normal text-white grid place-content-center bg-primary">
                  {totalQuantity}
                </span>
              </button>

              <button
                className={`flex items-center gap-2 font-medium
                ${activeTab === "cart" ? "text-primary" : ""}`}
                onClick={() => handelTabChange("wishlist")}
              >
                Wishlist
                <span className="w-7 h-7 rounded-full text-[11px] font-normal text-white grid place-content-center bg-primary">
                  0
                </span>
              </button>
            </div>
            <div className="line-container">
                <div className={`line ${activeTab === "cart" ? "active" : ""}`}></div>

                <div className={`line ${activeTab === "wishlist" ? "active" : ""}`}></div>
            </div>
            {activeTab === "cart" ? 
            <>
                {cartItems.map((item) => (
                    <CartProduct
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    cover={item.cover}
                    price={item.price}
                    quantity={item.quantity}
                    />
                ))}
                <div className="total flex items-center justify-between mt-10">
                    <Title level={6}>Subtotal</Title>
                    <Title level={6}>&#8377;{(totalPrice.toFixed(2))}</Title>
                </div>
                <div className="checkout">
                    <NavLink to="/cart">
                        <button className="primary-btn w-full">View Cart</button>
                    </NavLink>
                </div>
            </> 

            : 

            <>Show Wishlist</>}

          </div>
        </>
      )}
    </>
  );
};


export const CartProduct = ({id,cover,name,price,quantity}) => {
    const dispatch = useDispatch()

    const removeCartItem = () => {
        dispatch(CartActions.removeFromAllCart(id));
    }
  return (
    <>
       <div className="mt-5 border-b-2 border-gray-200 pb-5">
        <div className="flex items-center gap-5">
            <div className="images w-20 h-20">
                {cover?.slice(0, 1).map((images,i)=>(
                    <img 
                    key={i} 
                    src={images?.image} 
                    alt={name}
                    className="w-full h-full object-contain" 
                    />
                ))}
            </div>
            <div className="details w-1/2">
                <BodyOne>{name}</BodyOne>
                <p className="text-primary-green">
                    {quantity} x {price?.toFixed(2)}
                </p>
            </div>
            <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-primary">
                <IoCloseOutline size={25} onClick={removeCartItem}/>
            </button>
        </div>
       </div>
    </>
  )
}
