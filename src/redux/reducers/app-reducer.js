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

    case "SET_GOALS_DATA": {
      return {
        ...state,
        goalsData: action.payload.goalsData,
        sortedGoalsIndex: action.payload.sortedGoalsIndex,
        goalsDataLoaded: true
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

    case "CHANGE_INCOME_MODAL_INPUT": {
      switch (action.payload.name) {
        case "description": {
          return {
            ...state,
            incomeForm: {
              ...state.incomeForm,
              description: action.payload.value
            }
          };
        }
        case "date": {
          return {
            ...state,
            incomeForm: { ...state.incomeForm, date: action.payload.value }
          };
        }
        case "hour": {
          return {
            ...state,
            incomeForm: { ...state.incomeForm, hour: action.payload.value }
          };
        }
        case "quantity": {
          return {
            ...state,
            incomeForm: { ...state.incomeForm, quantity: action.payload.value }
          };
        }
        default:
          return state;
      }
    }

    case "CHANGE_EXPENSE_MODAL_INPUT": {
      switch (action.payload.name) {
        case "description": {
          return {
            ...state,
            expenseForm: {
              ...state.expenseForm,
              description: action.payload.value
            }
          };
        }
        case "date": {
          return {
            ...state,
            expenseForm: { ...state.expenseForm, date: action.payload.value }
          };
        }
        case "hour": {
          return {
            ...state,
            expenseForm: { ...state.expenseForm, hour: action.payload.value }
          };
        }
        case "quantity": {
          return {
            ...state,
            expenseForm: {
              ...state.expenseForm,
              quantity: action.payload.value
            }
          };
        }
        default:
          return state;
      }
    }

    case "CHANGE_EDIT_MODAL_INPUT": {
      switch (action.payload.name) {
        case "description": {
          return {
            ...state,
            editRecordForm: { ...state.editRecordForm, description: action.payload.value }
          };
        }
        case "date": {
          return {
            ...state,
            editRecordForm: { ...state.editRecordForm, date: action.payload.value }
          };
        }
        case "hour": {
          return {
            ...state,
            editRecordForm: { ...state.editRecordForm, hour: action.payload.value }
          };
        }
        case "quantity": {
          return {
            ...state,
            editRecordForm: { ...state.editRecordForm, quantity: action.payload.value }
          };
        }
        default:
          return state;
      }
    }

    case "CHANGE_GOALS_MODAL_INPUT": {
      switch (action.payload.name) {
        case "description": {
          return {
            ...state,
            goalsForm: { ...state.goalsForm, description: action.payload.value }
          };
        }
        case "date": {
          return {
            ...state,
            goalsForm: {
              ...state.goalsForm,
              dateToAccomplish: action.payload.value
            }
          };
        }
        case "quantity": {
          return {
            ...state,
            goalsForm: { ...state.goalsForm, quantity: action.payload.value }
          };
        }
        default:
          return state;
      }
    }

    case "CHANGE_EDIT_GOALS_MODAL_INPUT": {
      switch (action.payload.name) {
        case "description": {
          return {
            ...state,
            editGoalsForm: { ...state.editGoalsForm, description: action.payload.value }
          };
        }
        case "date": {
          return {
            ...state,
            editGoalsForm: { ...state.editGoalsForm, dateToAccomplish: action.payload.value }
          };
        }
        case "quantity": {
          return {
            ...state,
            editGoalsForm: { ...state.editGoalsForm, quantity: action.payload.value }
          };
        }
        default:
          return state;
      }
    }

    case "CLEAN_RECORD_FORM": {
      if (action.payload.isIncome) {
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
      } else {
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
    }

    case "CLEAN_GOAL_FORM": {
      return {
        ...state,
        goalsForm: {
          description: "",
          dateToAccomplish: "",
          quantity: ""
        }
      };
    }

    case "OPEN_EDIT_RECORD_MODAL": {
      state.editRecordForm = state.balanceData[action.payload.recordID];
      state.editRecordForm.quantity = state.editRecordForm.quantity.toString();
      return {
        ...state
      };
    }

    case "OPEN_EDIT_GOALS_MODAL": {
      state.editGoalsForm = state.goalsData[action.payload.goalID];
      state.editGoalsForm.quantity = state.editGoalsForm.quantity.toString();
      return {
        ...state
      };
    }

    default:
      return state;
  }
}

export default AppReducer;
