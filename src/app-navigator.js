import React, { Component } from 'react'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'
import { Icon } from 'native-base';
import AppLayout from './structure/components/app-layout';
import Expenses from './screens/expenses/containers/expenses';
import Savings from './screens/savings/containers/savings';
import Incomes from './screens/incomes/containers/incomes';
import Goals from './screens/goals/containers/goals';
import Book from './screens/book/containers/book';

// const AppNavigator = createStackNavigator(
//   {
//     Home: {
//       screen: TabNavigator
//     }
//   },
//   {
//     initialRouteName: 'Home',
//     cardStyle: {
//       backgroundColor: 'white',
//     },
//     navigationOptions: {
//       header: HeaderLayout
//     }
//   }
// )

const TabNavigator = createBottomTabNavigator(
  {
    Incomes: {
      screen: Incomes,
      navigationOptions: {
        title: 'Ingresos',
        tabBarIcon: props => <Icon name="chart" style={{color: props.tintColor}} />,
      }
    },
    Expenses: {
      screen: Expenses,
      navigationOptions: {
        title: 'Gastos',
        tabBarIcon: props => <Icon name="tag" style={{color: props.tintColor}} />,
      }
    },
    Savings: {
      screen: Savings,
      navigationOptions: {
        title: 'Ahorro',
        tabBarIcon: props => <Icon name="wallet" style={{color: props.tintColor}} />,
      }
    },
    Goals: {
      screen: Goals,
      navigationOptions: {
        title: 'Metas',
        tabBarIcon: props => <Icon name="star" style={{color: props.tintColor}} />,
      }
    },
    Book: {
      screen: Book,
      navigationOptions: {
        title: 'Libro',
        tabBarIcon: props => <Icon name="book-open" style={{color: props.tintColor}} />,
      }
    }
  },
  {
    initialRouteName: 'Savings',
    tabBarOptions: {
      activeTintColor: '#6E4F94',
      inactiveTintColor: '#000000',
      labelStyle: {
        fontSize: 8,
      }
    },
  }
)

export default TabNavigator;