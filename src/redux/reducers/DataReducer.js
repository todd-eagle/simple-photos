const initialState = {
    profile: {}
}

const GET_PROFILE = 'GET_PROFILE'

export const getProfile = () => {
  const gotit = {
      avatar: 'avatar_img',
      background: 'background_img'
  }
  return {
      type: GET_PROFILE,
      payload: gotit
  }
}

export default function (state = initialState, action){
    switch(action.type) {
        case GET_PROFILE:
            return{...state, profile: action.payload}
        default:
            return initialState    
    }
}