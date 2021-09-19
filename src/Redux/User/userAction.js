import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS, FETCH_USER_FAILURE} from './userType'
import axios from 'axios'

export const fetchUserRequest = () =>{
    return {
        type : FETCH_USER_REQUEST
    }
}
export const fetchUserSuccsss = users =>{
    console.log(users)
    return {
        type : FETCH_USER_SUCCESS,
        payload : users
    }
}
export const fetchUserFailure = err =>{
    return {
        type : FETCH_USER_FAILURE,
        payload : err
    }
}

export const fetchUsers =()=>{
    return (dispatch) => {
        dispatch(fetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            console.log('--------',response)
            const users = response.data
            console.log('9999', users)
            dispatch(fetchUserSuccsss(users))
        })
        .catch(error=>{
            // console.log(error)
            const errMsg = error.message
            dispatch(fetchUserFailure(errMsg))
        })
    }
}