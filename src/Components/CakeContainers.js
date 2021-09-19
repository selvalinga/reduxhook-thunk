import React from "react";
import {connect} from 'react-redux'
import { buyCake } from "../Redux";

const CakeContainers = (props)=>{
    return(
        <div>
<h2>No of cake:{props.noOfCakes}</h2>
<button onClick={props.buyCake}> buy cake</button>
        </div>
    )
}
const mapStateToProps  = state =>{
    return{
        noOfCakes: state.cake.noOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake : ()=> dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainers)