import axios from 'axios'

const initialState = {
   user: {},
   isLoggedIn: false
}

const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const GET_SESS_USER = 'GET_SESS_USER'

export const login = (user) => {
    //  console.log("user redux", user)
    return {
        type: LOGIN_USER, 
        payload: user
    }
}

export const logout = () => {
    axios.delete('/api/auth')
    return {
        type: LOGOUT_USER,
        payload: initialState
    }
}

export const getUserSession = () => {
    const user = axios.get('/api/auth/user')
    // console.log("user session: ", user)
    return {
        type: GET_SESS_USER,
        payload: user
    }
}

export default function (state = initialState, action){
    // console.log("Action Type",action.type)
    switch (action.type) {
        case LOGIN_USER:
            return{...state, user: action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return{...state, ...action.payload}
        case GET_SESS_USER + '_PENDING':
            return state
        case GET_SESS_USER + '_FULFILLED':
            return {...state, user: action.payload.data, isLoggedIn: true}
        default:
            return state
    }
}