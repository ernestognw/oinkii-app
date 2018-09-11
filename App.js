import React, { Component } from "react";
import getTheme from "./native-base-theme/components";
import oinkii from "./native-base-theme/variables/custom";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/store";
import AppNavigatorWithState from "./src/app-navigator-with-state";
import AppNavigator from "./src/app-navigator";
import fakeApi from "./src/redux/fake-api";
import LoadingLayout from './src/screens/login/components/loading-layout';

console.disableYellowBox = true;
console.log(persistor);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<LoadingLayout/>}
          persistor={persistor}
        >
          <StyleProvider style={getTheme(oinkii)}>
            <AppNavigatorWithState />
          </StyleProvider>
        </PersistGate>
      </Provider>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default App;
