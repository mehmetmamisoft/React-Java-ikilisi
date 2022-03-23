
//tüm state burda toplanır configurestore anlamıda mevcut
//redux fonksiyonudur bu
//object ile reducer'ları geçiyoruz

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer=combineReducers({
    cart:cartReducer,
    //user:userReducer gelmesi lazım yazarsakeğer

})

export default rootReducer;
