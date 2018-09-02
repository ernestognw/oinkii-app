import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from '../../app-navigator';

const NavigationReducer = createNavigationReducer(AppNavigator)

export default NavigationReducer;