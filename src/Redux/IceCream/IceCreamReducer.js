import { BUY_ICECREAM } from "./IceCreamTypes";

const initalState = {
    noOfIceCream : 20
}

const IceCreamReducer = (state = initalState, action) =>{
    switch(action.type){
        case BUY_ICECREAM : return {
            ...state,
            noOfIceCream : state.noOfIceCream -1
        }
        default :
        return state
    }

}
export default IceCreamReducer