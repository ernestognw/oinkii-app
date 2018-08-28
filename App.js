import React, { Component } from 'react';
import AppLayout from './src/app-layout';
import getTheme from './native-base-theme/components';
import oinkii from './native-base-theme/variables/custom';
import { StyleProvider } from 'native-base';

class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(oinkii)}>
        <AppLayout />
      </StyleProvider>
    );
  }
}

export default App;