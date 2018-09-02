import { createStore, applyMiddleware } from 'redux';
import MainReducer from './reducers/main-reducer';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

const NavigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
)

const store = createStore(
  MainReducer, 
  applyMiddleware(NavigationMiddleware)
)

export default store;