import { CART_ADD_ITEM } from '../constatnts/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload

      const existItem = state.cartItems.find(
        (stateCartItem) => stateCartItem.id === item.id
      )

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((stateCartItem) =>
            stateCartItem.id === existItem.id ? item : stateCartItem
          ),
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }

    default:
      return state
  }
}
