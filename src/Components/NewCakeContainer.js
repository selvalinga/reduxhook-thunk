import React,{useState} from "react";
import {connect} from 'react-redux'
import { buyCake } from "../Redux";

const NewCakeContainers = (props)=>{
    const [number, setNumber] = useState(1)
    return(
        <div>
<h2>No of cake:{props.noOfCakes}</h2>
<input type='text' value={number} onChange={(e)=>setNumber(e.target.value)} />
<button onClick={()=>props.buyCake(number)}> buy {number} cake</button>
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
        buyCake : (number)=> dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainers)