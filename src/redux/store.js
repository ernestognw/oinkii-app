import { createStore, applyMiddleware } from "redux";
import MainReducer from "./reducers/main-reducer";
import { createReactNavigationReduxMiddleware } from "react-navigation-redux-helpers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const NavigationMiddleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);

initialState = {
  AppReducer: {
    balanceData: "",
    sortedBalanceIndex: "",
    balanceDataLoaded: false,
    goalsData: "",
    sortedGoalsIndex: "",
    goalsDataLoaded: false,
    bookLoaded: false,
    incomeForm: {
      description: "",
      date: "",
      hour: "",
      quantity: "",
      income: true
    },
    expenseForm: {
      description: "",
      date: "",
      hour: "",
      quantity: "",
      income: false
    },
    editForm: {
      description: "",
      date: "",
      hour: "",
      quantity: "",
      income: false,
      time: "",
      id: ""
    },
    goalsForm: {
      description: "",
      dateToAccomplish: "",
      quantity: "",
    },
  }
};

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, MainReducer);

export const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(NavigationMiddleware),
    applyMiddleware(thunk)
  )
);

export const persistor = persistStore(store);
