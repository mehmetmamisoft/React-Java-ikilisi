import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { devToolsEnhancer } from "redux-devtools-extension";


export function configureStore() {
  //normalde buda olabilirdi
  //import thunk from "redux-thunk"
  //return createStore(rootReducers, applyMiddleware(thunk))

  //redux devtools chrome ekleduk devtoolenhancer kaldırabilirsin
  return createStore(rootReducer, devToolsEnhancer);
}
