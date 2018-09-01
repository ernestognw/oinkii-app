import { combineReducers } from 'redux';
import NavigationReducer from './navigation-reducer';
import AppReducer from './app-reducer';

const MainReducer = combineReducers({
  nav: NavigationReducer,
  AppReducer
})

export default MainReducer;