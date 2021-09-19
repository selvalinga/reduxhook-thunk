import { useReducer } from "react";
import { combineReducers } from "redux";
import cakeReducer from './cakes/cakeReducer'
import IceCreamReducer  from "./IceCream/IceCreamReducer";
import UserReducer from './User/UserReducer'

const rootReducer = combineReducers({
    cake : cakeReducer,
    iceCream : IceCreamReducer,
    user : UserReducer
})

export default rootReducer