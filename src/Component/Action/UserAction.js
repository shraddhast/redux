import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './UserTypes'
import Axios from 'axios'
import axios from 'axios'

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
export const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
export const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUser = () => {
    return (dispatch) =>{
        dispatch(fetchUserRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            const users = res.data
            dispatch(fetchUserSuccess(users))
        })
        .catch(error => {
            const errMssg = error.message
            dispatch(fetchUserFailure(errMssg))
        })

    }
}