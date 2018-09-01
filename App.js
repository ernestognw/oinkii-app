import React, { Component } from "react";
import AppLayout from "./src/app-layout";
import getTheme from "./native-base-theme/components";
import oinkii from "./native-base-theme/variables/custom";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import store from './src/redux/store';
import AppNavigatorWithState from './src/app-navigator-with-state';
import AppNavigator from "./src/app-navigator";

class App extends Component {
  // FAKE API CALL JUST FOR EXAMPLE
  async componentDidMount(){
    await setTimeout(() => {
      console.log(fakeApi)
      store.dispatch({
        type: 'SET_USER_DATA',
        payload: {
          userData: fakeApi
        }
      })
    }, 2000)
  }

  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(oinkii)}>
          <AppNavigatorWithState />
        </StyleProvider>
      </Provider>
    );
  }
}

export default App;
