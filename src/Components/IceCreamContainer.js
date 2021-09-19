import React  from "react";
import { buyIceCream } from "../Redux";
import {connect} from 'react-redux'

const IceCreamContainer = (props)=>{
    return(
        <div>
<h2>No of IceCream:{props.noOfIceCream}</h2>
<button onClick={props.buyIceCream}> buy icecream</button>
        </div>
    )
}
const mapStateToProps  = state =>{
    return{
        noOfIceCream: state.iceCream.noOfIceCream
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyIceCream : ()=> dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)