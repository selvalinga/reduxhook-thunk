import React from 'react';
import {connect} from 'react-redux'
import { buyCake, buyIceCream } from '../Redux';


const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}> click</button>
        </div>
    );
};


const mapStateToProps = (state,ownProps)=>{
    const itemState = ownProps.cake ? state.cake.noOfCakes : state.iceCream.noOfIceCream

    return {
        item : itemState
    }

}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const dispatchFun = ownProps.cake ? ()=>dispatch(buyCake()) : ()=>dispatch(buyIceCream())
    return {
        buyItem : dispatchFun
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
