import React, { useEffect }from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../Action/UserAction'

function UserContainer({userdata,fetchUser}) {

    useEffect(() => {
        fetchUser()
    },[fetchUser])

    return  userdata.loading ? (
    <h1>Loading</h1>
    ) : userdata.error ? ( 
    <h1>{userdata.error}</h1> 
    ) :( 
    <div>
        UserList
        <div>
            {
                userdata && userdata.users && userdata.users.map ( user =><p> {user.name} </p>)
            }
        </div>
    </div> )
        
}

const mapStateToProps = (state) => {
return{
    userdata : state.UserReducer
}
}
const mapDispatchToProps = (dispatch) =>{
    return{
       fetchUser : () => dispatch(fetchUser())
    }

}
export default  connect(mapStateToProps,mapDispatchToProps)(UserContainer)
