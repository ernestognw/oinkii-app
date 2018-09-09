import { createStore, applyMiddleware } from 'redux';
import MainReducer from './reducers/main-reducer';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const NavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

initialState = {
  AppReducer: {
    balanceData: '',
    sortedBalanceIndex: '',
    bookLoaded: false,
    balanceDataLoaded: false,
    incomeForm: {
      description: "",
      date: "",
      hour: "",
      quantity: "",
      income: true,
    },
    expenseForm: {
      description: "",
      date: "",
      hour: "",
      quantity: "",
      income: false,
    },
    editForm: {
      description: "",
      date: "",
      hour: "",
      quantity: "",
      income: false,
      time: "",
      id: "",
    }
  }
}

const store = createStore(
  MainReducer,
  initialState, 
  composeWithDevTools(
    applyMiddleware(NavigationMiddleware),
    applyMiddleware(thunk),
  ));

export default store;