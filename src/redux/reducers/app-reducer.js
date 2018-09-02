function AppReducer (state = {}, action) {
  switch (action.type) {
    case 'SET_USER_DATA' : {
      return {
        ...state,
        userData: action.payload.userData,
        userDataLoaded: true,
      }
    }

    default: 
      return state
  }
}

export default AppReducer;