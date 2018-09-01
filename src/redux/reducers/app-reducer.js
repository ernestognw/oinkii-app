function AppReducer (state = {}, action) {
  switch (action.type) {
    case 'SET_ROUTE_INCOMES' : {
      return {
        ...state,
        selected: 'incomes'
      }
    }

    case 'SET_ROUTE_EXPENSES' : {
      return {
        ...state,
        selected: 'expenses'
      }
    }

    case 'SET_ROUTE_SAVINGS' : {
      return {
        ...state,
        selected: 'savings'
      }
    }

    case 'SET_ROUTE_GOALS' : {
      return {
        ...state,
        selected: 'goals'
      }
    }

    case 'SET_ROUTE_BOOK' : {
      return {
        ...state,
        selected: 'book'
      }
    }

    case 'SET_USER_DATA' : {
      return {
        ...state,
        userData: action.payload.userData,
        userDataLoading: false,
      }
    }

    default: 
      return state
  }
}

export default AppReducer;