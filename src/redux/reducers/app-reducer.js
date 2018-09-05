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

    case 'CHANGE_MODAL_INPUT' : {
      console.log(action.payload.type, action.payload.name)
      if(action.payload.type == 'income'){
        if(action.payload.name == 'description'){
          return {
            ...state,
            incomeForm: {
              ...state.incomeForm,
              description: action.payload.value
            }
          }
        } else if(action.payload.name == 'date'){
          return {
            ...state,
            incomeForm: {
              ...state.incomeForm,
              date: action.payload.value
            }
          }
        } else if(action.payload.name == 'hour'){
          return {
            ...state,
            incomeForm: {
              ...state.incomeForm,
              hour: action.payload.value
            }
          }
        } else if(action.payload.name == 'quantity'){
          return {
            ...state,
            incomeForm: {
              ...state.incomeForm,
              quantity: action.payload.value
            }
          }
        }
      }

      if(action.payload.type == 'expense'){
          if(action.payload.name == 'description'){
            return {
              ...state,
              expenseForm: {
                ...state.expenseForm,
                description: action.payload.value
              }
            }
          } else if(action.payload.name == 'date'){
            return {
              ...state,
              expenseForm: {
                ...state.expenseForm,
                date: action.payload.value
              }
            }
          } else if(action.payload.name == 'hour'){
            return {
              ...state,
              expenseForm: {
                ...state.expenseForm,
                hour: action.payload.value
              }
            }
          } else if(action.payload.name == 'quantity'){
            return {
              ...state,
              expenseForm: {
                ...state.expenseForm,
                quantity: action.payload.value
              }
            }
          }
        }
      }
    break;

    default: 
      return state
  }
}

export default AppReducer;