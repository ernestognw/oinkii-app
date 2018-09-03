function AppReducer (state = {}, action) {
  switch (action.type) {
    case 'SET_BALANCE_DATA' : {
      return {
        ...state,
        balanceData: action.payload.balanceData,
        balanceDataLoaded: true,
      }
    }

    case 'SET_USER_DATA' : {
      return {
        ...state,
        userData: action.payload.userData
      }
    }

    default: 
      return state
  }
}

export default AppReducer;