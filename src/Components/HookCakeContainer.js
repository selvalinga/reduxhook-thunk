import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { buyCake } from '../Redux';


const HookCakeContainer = () => {
    const noOfCakes = useSelector(state => state.cake.noOfCakes)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>No Of cakes in hook - {noOfCakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>buy cakes</button>
        </div>
    );
};


HookCakeContainer.propTypes = {

};


export default HookCakeContainer;
