import { useDispatch, useSelector } from "react-redux"
import { CartActions, selectTotalPrice } from "../redux/slice/cartSlice"
import { BodyOne, Title } from "../components/common/CustomComponents"
import BgImage from "../assets/common/Frame.png"
import { IoCloseOutline } from "react-icons/io5"

export const CartPage = ({id, cover, name, price, quantity}) => {
    const cartItems = useSelector((state) => state.cart.itemList)
    const totalPrice = useSelector(selectTotalPrice)
    const dispatch = useDispatch()


   return (
     <>
        <section className="mt-16">
            <div className="h-[50vh]">
                <div className="images absolute top-0 left-0 w-full h-1/2">
                    <img src={BgImage} alt="" />
                </div>
                <div className="text absolute top-48 left-[45%]">
                    <Title level={1}>Cart</Title>
                </div>
            </div>
            <div className="container flex justify-center">
                <div className="w-2/3">
                    <div className="relative overflow-x-auto sm:rounded-lg     flex justify-center w-full">
                        


                        <div className="flex items-center justify-center flex-col-reverse w-full">
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
                        </div>


                    </div>

                    <div className="total z-30 flex items-center justify-between h-20 mt-10 px-32 border border-green-300 p-5 bg-black">
                        <Title level={6} className="text-white">Subtotal</Title>
                        <Title level={6} className="text-white">&#8377;{(totalPrice.toFixed(2))}</Title>
                    </div>

                </div>
            </div>
        </section>
     </>
   )
 }
 

 export const CartProduct = ({id,cover,name,price,quantity}) => {
    const dispatch = useDispatch()


    const removeCartItem = () => {
        dispatch(CartActions.removeFromAllCart(id));
    }
  return (
    <>
       <div className="mt-5 border-b-2 border-gray-200 pb-5 w-full">
        <div className="flex items-center gap-5 justify-between">
            <div className="images w-20 h-20">
                    <img 
                    src={cover} 
                    alt={name}
                    className="w-full h-full object-contain" 
                    />
            </div>
            <div className="details w-1/2">
                {/* <BodyOne>{name}</BodyOne> */}
                <p className="text-primary-green flex justify-center">
                    <span 
                    className="text-white flex justify-center items-center bg-black rounded-full w-7 h-7 px-1 mx-1">
                        {quantity}</span> x {price?.toFixed(2)}
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
