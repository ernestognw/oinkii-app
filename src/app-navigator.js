import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'
import AppLayout from './app-layout';
import { Text } from 'native-base';

const AppNavigator = createStackNavigator(
  {
    Home: () => <Text>Hello</Text>
  }
)

export default AppNavigator;