import React,{useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../Redux';

function  UserContainer  ({userData , fetchUsers}) {
    useEffect(()=>{
        fetchUsers()
    }, [])

console.log(userData)
    return userData.loading?(<h2>loading</h2>) : userData.error ? (<div>We are getting {userData.error}</div>):
    ( userData && userData.users.map((first)=>{
       return <div>
           <div> <h2>{first.name}</h2> </div>
        </div>
    })
        
    );
};

const mapStateToProps = state =>{
    console.log(state)
    return {
        userData : state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchUsers : () => dispatch(fetchUsers())
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
