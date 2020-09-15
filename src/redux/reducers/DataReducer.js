const initialState = {
    profileInfo: {}
}

const GET_PROFILE = 'GET_PROFILE'
const REMOVE_PROFILE = 'REMOVE_PROFILE'
const UPDATE_PROFILE = 'UPDATE_PROFILE'

export const getProfile = (profile) => {
 
  return {
      type: GET_PROFILE,
      payload: profile
  }
}

export const deleteProfile = () => {
    return {
        type: 'REMOVE_PROFILE',
        payload: initialState
    }
}

export const updateProfile = (newLink) => {
    return {
        type: 'UPDATE_PROFILE',
        payload: newLink

    }
}

export default function (state = initialState, action){
    switch(action.type) {
        case GET_PROFILE:
            return {...state, profileInfo: action.payload}
        case UPDATE_PROFILE:
            return {...state, profileInfo: action.payload}    
        case REMOVE_PROFILE:   
            return {...state, ...action.payload} 
        default:
            return state    
    }
}