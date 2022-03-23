import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
  x:1,
  y:2
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);

      if (product) {
        product.quantity++;
        return {
          ...state,
          cartItems:[...state.cartItems,{quantity:1,product:payload}]
        };
      } else {
     
        return{

        }
      }
     
    case REMOVE_FROM_CART:

    return{
        //cartitem uçurcaz state koppya alduk
        //burdada referans değiştir filter yap spread önemli
      //id farklıysa filtrele filter map gibi amaç referans değişsin

        ...state,
        cartItems: state.cartItems.filter(c=>c.product.id!==payload.id)
    }
    default:
        return state;

  }
}
