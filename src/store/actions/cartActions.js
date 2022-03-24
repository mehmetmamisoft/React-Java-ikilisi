
//redux ilk yeri actions başlangıcı burasu
//object gönder aksiyon ismi  olsun add tochart 
//reducer hangi satte etkildeiğini bulcek
//eklicande ne eklicek aksiyonların gönderdiği sepet kısmıdır

//magic string olmasın diye 
export const ADD_TO_CART="ADD_TO_CART"
export const REMOVE_FROM_CART="REMOVE_FROM_CART"


export function addToCart(product) {
    return {
      type: "ADD_TO_CART",
      payload: product
    };
  }

  export function removeFromCart(product) {
    return {
      type: "REMOVE_FROM_CART",
      payload: product
    };
  }