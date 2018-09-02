import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import AppNavigator from './app-navigator';

const ReduxifyApp = reduxifyNavigator(AppNavigator, 'root')

class AppNavigatorWithState extends ReduxifyApp {

}

function mapStateToProps(state) {
  return {
    state: state.nav
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState);