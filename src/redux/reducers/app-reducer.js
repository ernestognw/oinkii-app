function AppReducer(state = {}, action) {
  switch (action.type) {
    case "SET_BALANCE_DATA": {
      return {
        ...state,
        balanceData: action.payload.balanceData,
        sortedBalanceIndex: action.payload.sortedBalanceIndex,
        balanceDataLoaded: true,
        totalIncome: action.payload.totalIncome,
        totalExpense: action.payload.totalExpense,
        totalBalance: action.payload.totalBalance
      };
    }

    case "SET_USER_DATA": {
      return {
        ...state,
        userData: action.payload.userData
      };
    }

    case "BOOK_LOADED": {
      return {
        ...state,
        bookLoaded: true
      };
    }

    case "CHANGE_INCOME_MODAL_INPUT" : {
      switch (action.payload.name){
        case "description": {
          return {...state, incomeForm: {...state.incomeForm, description: action.payload.value}};
        }
        case "date": {
          return {...state, incomeForm: {...state.incomeForm, date: action.payload.value}};
        }
        case "hour": {
          return {...state, incomeForm: {...state.incomeForm, hour: action.payload.value}};
        }
        case "quantity": {
          return {...state, incomeForm: {...state.incomeForm, quantity: action.payload.value}};
        }
        default:
          return state;
      }
    }

    case "CHANGE_EXPENSE_MODAL_INPUT" : {
      switch (action.payload.name){
        case "description": {
          return {...state, expenseForm: {...state.expenseForm, description: action.payload.value}};
        }
        case "date": {
          return {...state, expenseForm: {...state.expenseForm, date: action.payload.value}};
        }
        case "hour": {
          return {...state, expenseForm: {...state.expenseForm, hour: action.payload.value}};
        }
        case "quantity": {
          return {...state, expenseForm: {...state.expenseForm, quantity: action.payload.value}};
        }
        default:
          return state;
      }
    }

    case "CHANGE_EDIT_MODAL_INPUT" : {
      console.log('reached')
      switch (action.payload.name){
        case "description": {
          return {...state, editForm: {...state.editForm, description: action.payload.value}};
        }
        case "date": {
          return {...state, editForm: {...state.editForm, date: action.payload.value}};
        }
        case "hour": {
          return {...state, editForm: {...state.editForm, hour: action.payload.value}};
        }
        case "quantity": {
          return {...state, editForm: {...state.editForm, quantity: action.payload.value}};
        }
        default:
          return state;
      }
    }

    case "CLEAN_FORM": {
      if (action.payload.isIncome == true) {
        return {
          ...state,
          incomeForm: {
            description: "",
            date: "",
            hour: "",
            quantity: "",
            income: true
          }
        };
      } else if (action.payload.isIncome == false) {
        return {
          ...state,
          expenseForm: {
            description: "",
            date: "",
            hour: "",
            quantity: "",
            income: false
          }
        };
      }
      break;
    }

    case "OPEN_EDIT_MODAL":
      state.editForm = state.balanceData[action.payload.recordID];
      state.editForm.quantity = state.editForm.quantity.toString();
      return {
        ...state
      };

    default:
      return state;
  }
}

export default AppReducer;
