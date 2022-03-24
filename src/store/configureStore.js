import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";




export function configureStore() {
  //normalde buda olabilirdi
  //import thunk from "redux-thunk"
  //return createStore(rootReducers, applyMiddleware(thunk))

  //redux devtools chrome ekleduk devtoolenhancer kaldırabilirsin
  return createStore(rootReducer,devToolsEnhancer())

}


 
 
 