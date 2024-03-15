import { createSlice , createSelector } from '@reduxjs/toolkit'

const initialState = {}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    likeList: [],
    likeQuantity: 0,
    itemList: [],
    totalQuantity: 0,
    // quantity: of individual product... like a function ... just like fetchproduct/fetchSingleProduct
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) 
      {
        if(existingItem.quantity < 5)
        {
          existingItem.quantity++
          existingItem.totalPrice += newItem.price;
        }
        else 
        {
          alert("Maximum quantity reached")
          existingItem.quantity = 1
        }
      } 
      else 
      {
        state.itemList.push(
            {
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                totalPrice: newItem.price,
                name: newItem.name,
                cover: newItem.images,
            }
        );
        state.totalQuantity++;
      }
    },

    wishlist(state, action) {
      const newItem = action.payload;
      const existingItem = state.likeList.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) 
      {
        if(existingItem.quantity < 1)
        {
          existingItem.quantity++
        }
        else
        {
          alert("Already Liked")
        }
      } 
      else 
      {
        state.likeList.push(
            {
                id: newItem.id,
                price: newItem.price,
                quantity: 1,
                name: newItem.name,
                cover: newItem.images,
            }
        );
        state.likeQuantity++;
      }
    },

    removeFromWishlist(state,action){
      const id = action.payload;
      state.likeList = state.likeList.filter(
          (item) => item.id !== id
      );
      state.likeQuantity -= state.likeList.reduce((acc, item) => acc + item.quantity, 0);
  },

    removeFromCart(state, action) {
        const id = action.payload;
        const existingItem = state.itemList.find(
            (item) => item.id === id)
        if (existingItem.quantity > 1)
        {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      },
        removeFromAllCart(state,action){
            const id = action.payload;
            state.itemList = state.itemList.filter(
                (item) => item.id !== id
            );
            state.totalQuantity -= state.itemList.reduce((acc, item) => acc + item.quantity, 0);
        }
    },
});

export const CartActions = cartSlice.actions
export const {} = cartSlice.actions

export const selectTotalQuantity = createSelector(
    (state) => state.cart.itemList,
    (itemList) => itemList.reduce((acc) => acc + 1, 0)
)

export const selectLikesQuantity = createSelector(
  (state) => state.cart.likeList,
  (itemList) => itemList.reduce((acc) => acc + 1, 0)
)

export const selectTotalPrice= createSelector(
    (state) => state.cart.itemList,
    (itemList) => itemList.reduce((acc, item) => acc + item.totalPrice, 0)
)

export const selectQuantity = (productId) => (state) => {
  const item = state.cart.itemList.find((item) => item.id === productId);
  return item ? item.quantity : 0; // Return the quantity, or 0 if item is not found
}







export default cartSlice
